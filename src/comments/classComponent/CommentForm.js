import React from 'react';

class CommentForm extends React.Component {
    render() {
        return (
            <form onSubmit={e => this.props.onInputSubmit(e)}>
                <input
                    value={this.props.value}
                    onChange={e => this.props.onInputChange(e.currentTarget.value)}
                    placeholder="What's on your mind?"/>
            </form>
        );
    }
}

export default CommentForm;
