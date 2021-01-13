import React, {useEffect, useRef} from 'react';

const styles= {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
};

const CommentForm = props => {
    let previousValue = useRef(''); // return an objet {current: ''}
    // previousValue.current doesn't become '' after each rerenderings, because useRef gives us the same ref object on every render

    useEffect(() => {
        previousValue.current = props.value;
    });

    function handleButtonClick() {
        textarea.current.focus();
    }

    let textarea = useRef(null);

    return (
        <>
            <h3>A previous value - {previousValue.current}</h3>
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
