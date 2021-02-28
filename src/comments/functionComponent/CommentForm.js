import React, {useEffect, useRef} from 'react';

const styles= {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
};

const CommentForm = props => {
    return (
        <>
            <h3>{Date.now()}</h3>
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
