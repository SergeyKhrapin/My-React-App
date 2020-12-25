import React, {useState, useEffect} from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

const AddComment = () => {
    // the state is only created the first time our component renders !!!
    let [value, setStateValue] = useState('');
    let [comments, setStateComments] = useState([]);

    // Fire when state changing is completed
    useEffect(handleStateReadiness);
    
    function handleStateReadiness() {
        console.log('setState completed - ', value);
    }
    
    function onInputChange(val) {
        console.log('before setState - ', value);

        setStateValue(val);

        console.log('after setState - ', value);
    }
    
    function onInputSubmit(e) {
        e.preventDefault();

        const commentsArray = comments.concat({
            message: value
        });

        setStateValue('');
        setStateComments(commentsArray);
    }

    console.log('render');

    return (
        <>
            <CommentForm value={value} onInputChange={onInputChange} onInputSubmit={onInputSubmit} />
            <CommentList comments={comments} />
        </>
    );
}

export default AddComment;
