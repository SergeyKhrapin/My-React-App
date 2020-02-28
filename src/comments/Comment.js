import React from 'react';
import User from './User';
import Text from './Text';
import Date from './Date';
import faker from 'faker';

function Comment() {
  const comment = {
    author: {
        avatarUrl: faker.image.avatar(),
        name: faker.name.firstName() + ' ' + faker.name.lastName()
    },
    text: faker.lorem.sentence(),
    date: faker.date.recent().getMonth() + '/' + faker.date.recent().getDate() + '/' + faker.date.recent().getFullYear()
  };

  return (
    <div className="comment">
      <User user={comment.author}/>
      <Text text={comment.text}/>
      <Date date={comment.date}/>
    </div>
  );
}

export default Comment;