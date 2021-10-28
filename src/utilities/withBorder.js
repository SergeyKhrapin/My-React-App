import React, { useState } from "react";

const withBorder = (Component) => {
  const useInputHandlerAndValue = () => {
    const [color, setColor] = useState("gray");
    return {
      onChange: (event) => setColor(event.target.value),
      value: color,
    };
  };

  const WrapperComponent = (props) => {
    const inputHandlerAndValue = useInputHandlerAndValue();
    const styles = {
      padding: "10px",
      border: `4px solid ${inputHandlerAndValue.value}`,
    };

    return (
      <div style={styles}>
        <Component {...props} />
        <input placeholder="Change border color" {...inputHandlerAndValue} />
      </div>
    );
  };

  return WrapperComponent;
};

export default withBorder;
