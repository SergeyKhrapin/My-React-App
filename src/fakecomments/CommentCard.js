import React from 'react';

const styles = {
  commentCard: {
    margin: '10px 0',
    padding: '10px',
    border: '1px solid gray',
    borderRadius: '5px',
  },
  likeButton: {
    marginRight: '5px',
    color: 'green',
    cursor: 'pointer',
  },
  dislikeButton: {
    color: 'red',
    cursor: 'pointer',
  }
};

const CommentCard = props => {
  return (
    <div className="comment-card" style={styles.commentCard}>
      {props.children}
      <div className="comment-buttons">
        <button style={styles.likeButton}>Like</button>
        <button style={styles.dislikeButton}>Dislike</button>
      </div>
    </div>
  );
};

export default CommentCard;