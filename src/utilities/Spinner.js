import React from 'react';

const Spinner = ({message = 'Loading...'}) => {
    return (
        <div>{message}</div>
    );
}

export default Spinner;