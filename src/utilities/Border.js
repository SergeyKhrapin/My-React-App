import React from 'react';

const Border = props => {
    const styles = {
        padding: '10px',
        border: `4px solid ${props.children.props.borderColor}`
    };

    return (
        <div style={styles}>
            {props.children}
        </div>
    );
};

Border.defaultProps = {
    color: 'aqua'
};

export default Border;