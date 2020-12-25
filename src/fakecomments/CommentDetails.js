import React from 'react';
import User from './User';
import Text from './Text';
import Date from './Date';
import faker from 'faker';
import { checkPropTypes } from 'prop-types';

const CommentDetails = props => {
  const comment = {
    author: {
        avatarUrl: faker.image.avatar(),
        name: faker.name.firstName() + ' ' + faker.name.lastName()
    },
    text: faker.lorem.sentence(),
    date: faker.date.recent().getMonth() + '/' + faker.date.recent().getDate() + '/' + faker.date.recent().getFullYear()
  };

  return (
    <div className={props.className}>
      <User user={comment.author}/>
      <Text text={comment.text}/>
      <Date date={comment.date}/>
    </div>
  );
}

export default CommentDetails;
