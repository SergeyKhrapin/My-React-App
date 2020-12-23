import React from 'react';

const CommentCard = props => {
    return <li>{props.comment.message}</li>;
}

export default CommentCard;
