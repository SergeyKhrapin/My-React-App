import React from 'react';

const CommentForm = props => {
    return (
        <form onSubmit={e => props.onInputSubmit(e)}>
            <input
                value={props.value}
                onChange={e => props.onInputChange(e.currentTarget.value)}
                placeholder="What's on your mind?"/>
        </form>
    );
}

export default CommentForm;
