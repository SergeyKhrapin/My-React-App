import React, {useEffect, useRef} from 'react';

const styles= {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
};

const CommentForm = props => {
    function handleButtonClick() {
        textarea.current.focus();
    }

    let textarea = useRef(null);

    return (
        <>
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
