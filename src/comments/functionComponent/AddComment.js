import React, {useState} from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

const AddComment = () => {
    // the state is only created the first time our component renders !!!
    let [value, setStateValue] = useState('');
    let [comments, setStateComments] = useState([]);
    
    function onInputChange(val) {
        setStateValue(val);

        setTimeout(() => {
            console.log('value 2 - ', value);
            console.log('comments 2 - ', comments);
        }, 2000);
    }
    
    function onInputSubmit(e) {
        e.preventDefault();

        const commentsArray = comments.concat({
            message: value
        });

        setStateValue('');
        setStateComments(commentsArray);
    }

    return (
        <div>
            <CommentForm value={value} onInputChange={onInputChange} onInputSubmit={onInputSubmit} />
            <CommentList comments={comments} />
        </div>
    );
}

export default AddComment;
