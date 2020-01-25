import React from 'react';
import User from './User';
import Text from './Text';
import Date from './Date';

function Comment({comment}) {
    return (
      <div className="Comment">
        <User user={comment.author}/>
        <Text text={comment.text}/>
        <Date date={comment.date}/>
      </div>
    );
}

export default Comment;