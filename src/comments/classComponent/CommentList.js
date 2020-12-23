import React from 'react';

class CommentList extends React.Component {
    getCommentList() {
        return this.props.comments.map((comment, i) => {
            return <li key={i + 123}>{comment.message}</li>;
        });
    }

    render() {
        return <ul>{this.getCommentList()}</ul>;
    }
}

export default CommentList;
