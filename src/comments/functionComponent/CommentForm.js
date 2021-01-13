import React, {useEffect, useRef} from 'react';

const styles= {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
};

const CommentForm = props => {
    let renderCount = useRef(0); // return an objet {current: 0}
    // renderCount.current doesn't become 0 after each rerenderings, because useRef gives us the same ref object on every render

    useEffect(() => {
        renderCount.current++;
    });
    // In fact, we can don't use useEffect above. Just renderCount.current++;

    function handleButtonClick() {
        textarea.current.focus();
    }

    let textarea = useRef(null);

    return (
        <>
            <h3>Number of rerenderings - {renderCount.current}</h3>
            <form onSubmit={props.onTextareaSubmit} style={styles}>
                <textarea
                    ref={textarea}
                    value={props.value}
                    onChange={props.onTextareaChange}
                    onKeyPress={props.onTextareaKeypress}
                    placeholder="What's on your mind?">
                </textarea>
                <input type="submit" />
                <button onClick={handleButtonClick}>Focus</button>
            </form>
        </>
    );
}

export default CommentForm;
