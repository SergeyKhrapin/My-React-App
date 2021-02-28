import React, { PureComponent } from 'react';

// PureComponent - if props or state are not changed, component is not updated
class CommentCard extends PureComponent {
    constructor() {
        super();
    }

    // shouldComponentUpdate() {
    //     return false; // Prevent component update
    // }

    render() {
        console.log('CommentCard');
        return <li>{this.props.comment.message} - {Date.now()}</li>;
    };
}

export default CommentCard;
