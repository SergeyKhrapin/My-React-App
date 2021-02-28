import React, { memo } from 'react';
import CommentCard from './CommentCard';

const CommentList = ({ comments }) => {
    console.log('CommentList');

    return (
        <>
            <h3>CommentList - {Date.now()}</h3>
            <ul>{comments.map((comment, i) => <CommentCard key={i} comment={comment} />)}</ul>
        </>
    );
}

export default memo(CommentList);
