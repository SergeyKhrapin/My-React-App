import React, {useState, useEffect} from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

const AddComment = () => {
    function setInitialValue() {
        console.log('Some expensive calculation');
        return '';
    }

    // the state is only created the first time our component renders
    // but useState will execute each time on re-renders
    // but the argument inside useState() is disregarded in subsequent renders
    // let [value, setStateValue] = useState(setInitialValue());

    // Best practice
    // setInitialValue() is executed only once on the first render
    let [value, setStateValue] = useState(() => setInitialValue());

    let [comments, setStateComments] = useState([]);

    // Fire when state changing is completed
    useEffect(handleStateReadiness);
    
    function handleStateReadiness() {
        // console.log('setState completed - ', value);
    }
    
    function onTextareaChange(event) {
        // console.log('before setState - ', value);

        const val = event.currentTarget.value;

        setStateValue(val.trim() ? val : ''); // handle cases when ENTER (SHIFT + ENTER) or SPACE is pressed

        // console.log('after setState - ', value);
    }

    function onTextareaKeypress(event) {
        if (event.charCode == 13 && !event.shiftKey) {
            event.target.form.requestSubmit(); // trigger onSubmit (onTextareaSubmit) method
        }
    }
    
    function onTextareaSubmit(event) {
        event.preventDefault();
        
        if (value.trim()) {
            const commentsArray = comments.concat({
                message: value
            });
    
            setStateValue('');
            setStateComments(commentsArray);
        }
    }

    return (
        <>
            <CommentForm value={value} onTextareaChange={onTextareaChange} onTextareaKeypress={onTextareaKeypress} onTextareaSubmit={onTextareaSubmit} />
            <CommentList comments={comments} />
        </>
    );
}

export default AddComment;
