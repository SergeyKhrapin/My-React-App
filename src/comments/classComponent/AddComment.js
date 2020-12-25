import React from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

class AddComment extends React.Component {
    constructor() {
        super();

        this.state = {
            value: '',
            comments: []
        }

        this.onInputChange = (val) => {
            console.log('before setState - ', this.state.value);

            this.setState({value: val}, this.setStateCallback);

            console.log('after setState - ', this.state.value);
        }
        
        this.onInputSubmit = (e) => {
            e.preventDefault();

            const commentsArray = this.state.comments.concat({
                message: this.state.value,
                // id: 
            });

            this.setState({
                value: '',
                comments: commentsArray
            });
        }
    }

    // Fire when state changing is completed - option 1
    componentDidUpdate() {
        this.handleStateReadiness();
    }
    
    // Fire when state changing is completed - option 2
    setStateCallback() {
        this.handleStateReadiness();
    }

    handleStateReadiness() {
        console.log('setState completed - ', this.state.value);
    }

    render() {
        console.log('render');

        return (
            <>
                <CommentForm value={this.state.value} onInputChange={this.onInputChange} onInputSubmit={this.onInputSubmit} />
                <CommentList comments={this.state.comments} />
            </>
        );
    }
}

export default AddComment;
