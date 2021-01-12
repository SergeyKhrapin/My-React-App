import React, {useEffect, useRef} from 'react';

const styles= {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
};

const CommentForm = props => {
    let renderCount = useRef(0); // return an objet {current: 0}
    // renderCount.current doesn't become 0 after each rerenderings, useRef stores its value

    useEffect(() => {
        renderCount.current++;
    });
    // In fact, we can don't use useEffect above. Just renderCount.current++;

    return (
        <>
            <h3>Number of rerenderings - {renderCount.current}</h3>
            <form onSubmit={props.onTextareaSubmit} style={styles}>
                <textarea
                    value={props.value}
                    onChange={props.onTextareaChange}
                    onKeyPress={props.onTextareaKeypress}
                    placeholder="What's on your mind?"
                    autoFocus>
                </textarea>
                <input type="submit" />
            </form>
        </>
    );
}

export default CommentForm;
