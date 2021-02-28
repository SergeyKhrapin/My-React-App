import React from 'react';

const CommentCard = props => {
    console.log('CommentCard');

    return <li>{props.comment.message} - {Date.now()}</li>;
}

export default CommentCard;
