import React, { useState, useEffect, useRef } from "react";
import CommentList from "./CommentList";

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
  //   console.log("CommentForm");

	console.clear()

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

  let [comments, setStateComments] = useState({});

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
        // send a data to Web worker
        myWorker.postMessage(dateNow);
        return {
          ...state,
          [dateNow]: {
            message: value,
            date: null,
          },
        };
      });
    }

    // It doesn't work here!
    // window.removeEventListener("mousemove", mouseMoveHandler);
  }

  function handleRenderingCompletion() {
    // console.log("handleRenderingCompletion");
  }

  // Fire when rendering is completed
  // Only if comments variable is changed (when comment is submited)
  useEffect(() => {
		handleRenderingCompletion();
		textareaRef.current.focus()
		
    // Remove mouseleave listener when comment is submited
    // Note: we should use return
    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, [comments]);

  function mouseMoveHandler() {
    // console.log("move");
  }

  useEffect(() => {
    window.addEventListener("mousemove", mouseMoveHandler); // Executed only once (on first rendering) because the second parameter is an empty array
  }, []);

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
          // autoFocus
        ></textarea>
        <input type="submit" />
      </form>
      <CommentList comments={comments} />
    </>
  );
};

export default CommentForm;
