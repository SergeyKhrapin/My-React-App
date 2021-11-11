import React, { useState, useEffect, useRef, Suspense, lazy } from "react";
const CommentList = lazy(() => import("./CommentList"));

const styles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

// The goal is to add a comment publish date
// Let's assume that a calculation of that date takes a lot of time
// The downside of that - UI is frozen until the calculation is complete
// Web Worker comes to the rescue !
const myWorker = new Worker("worker.js");

const CommentForm = () => {
  const textareaRef = useRef()

  function setInitialValue() {
    // console.log("Some expensive calculation");
    return "";
  }

  // the state is only created the first time our component renders
  // but useState will execute each time on re-renders
  // but the argument inside useState() is disregarded in subsequent renders
  // let [value, setStateValue] = useState(setInitialValue());

  // Best practice
  // setInitialValue() is executed only once on the first render
  let [value, setStateValue] = useState(() => setInitialValue());

  let [comments, setStateComments] = useState(null);

  //   this handler gets called when getting the response from worker.js
  //   until getting the response a page is not frozen and a user can interact with it
  myWorker.onmessage = (e) => {
    // console.log("Main script: Message received from worker -", e.data);
    for (let timeStamp in comments) {
      if (parseInt(timeStamp) === e.data.timeStamp) {
        setStateComments((state) => {
          return {
            ...state,
            [timeStamp]: {
              ...state[timeStamp],
              date: e.data.date,
            },
          };
        });
      }
    }
  };

  function onTextareaChange(e) {
    const val = e.currentTarget.value;
    setStateValue(val.trim() ? val : ""); // handle cases when ENTER (SHIFT + ENTER) or SPACE is pressed
  }

  function onTextareaKeypress(e) {
    if (e.charCode == 13 && !e.shiftKey) {
      e.target.form.requestSubmit(); // trigger onSubmit (onTextareaSubmit) method
    }
  }

  function onTextareaSubmit(event) {
    event.preventDefault();

    if (value.trim()) {
      setStateValue("");
      setStateComments((state) => {
        const dateNow = Date.now();
        myWorker.postMessage(dateNow); // send a data to Web worker
        return {
          ...state,
          [dateNow]: {
            message: value,
            date: null,
          },
        };
      });
    }
  }

  useEffect(() => {
		textareaRef.current.focus()
  }, [comments]);

  return (
    <>
      <h3>{Date.now()}</h3>
      <form onSubmit={onTextareaSubmit} style={styles}>
        <textarea
					ref={textareaRef}
          value={value}
          onChange={onTextareaChange}
          onKeyPress={onTextareaKeypress}
          placeholder="What's on your mind?"
          ></textarea>
        <input type="submit" />
      </form>
      { comments && (
        <Suspense fallback={null}>
          <CommentList comments={comments} />
        </Suspense>
      ) }
    </>
  );
};

export default CommentForm;
