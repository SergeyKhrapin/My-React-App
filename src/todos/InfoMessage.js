import React from 'react';

const InfoMessage = (props) => {
    return (
        <p id="infoMessage">
            You have {props.todoQuantity} todos
        </p>
    );
}

export default InfoMessage;
