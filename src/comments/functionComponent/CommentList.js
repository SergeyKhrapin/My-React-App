import React, { memo } from "react";
import CommentCard from "./CommentCard";
import delay from '../../utilities/delay'

const CommentList = ({ comments }) => {
  delay(3000) // just to see a loading state

  return (
    <>
      <h3>CommentList - {Date.now()}</h3>
      <ul>
        {Object.values(comments).map((comment, i) => (
          <CommentCard key={i} comment={comment} />
        ))}
      </ul>
    </>
  );
};

export default memo(CommentList);
