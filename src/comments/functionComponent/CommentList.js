import React from 'react';
import CommentCard from './CommentCard';

const CommentList = (props) => {
    const comments = props.comments.map((comment, i) => {
        return <CommentCard key={i} comment={comment} />;
    });

    return (
        <>
            <h3>{Date.now()}</h3>
            <ul>{comments}</ul>
        </>
    );
}

export default CommentList;
