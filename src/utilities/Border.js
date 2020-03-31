import React, {useState} from 'react';

const Border = props => {
    // My custom hook (should begin with 'use' prefix)
    const useInputHandlerAndValue = () => {
        const [color, setColor] = useState('');
        return {
            onChange: event => setColor(event.target.value),
            value: color
        };
    };

    const inputHandlerAndValue = useInputHandlerAndValue();

    const styles = {
        padding: '10px',
        border: `4px solid ${inputHandlerAndValue.value || props.children.props.borderColor}`
    };

    return (
        <div style={styles}>
            {props.children}
            <input placeholder='Change border color' {...inputHandlerAndValue} />
        </div>
    );
};

export default Border;