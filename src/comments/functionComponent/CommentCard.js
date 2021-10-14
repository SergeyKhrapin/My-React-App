import React, { PureComponent } from "react";

class CommentCard extends PureComponent {
  constructor() {
    super();
  }

  render() {
    const {
      comment: { message, date },
    } = this.props;

    return (
      <li>
        {message}
        {date && <small> ({date})</small>}
      </li>
    );
  }
}

export default CommentCard;
