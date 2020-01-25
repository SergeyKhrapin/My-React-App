import React from 'react';
import Author from './Author';
import Text from './Text';
import Date from './Date';

function Comment({comment}) {
    return (
      <div className="Comment">
        <Author author={comment.author}/>
        <Text text={comment.text}/>
        <Date date={comment.date}/>
      </div>
    );
}

export default Comment;