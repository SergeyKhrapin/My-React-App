import React from 'react';
import PropTypes from 'prop-types';

function ToDoItems({title, index}) {
    return <li>{index}. {title}</li>;
}

ToDoItems.propTypes = {
    index: PropTypes.number,
    title: PropTypes.string
};

ToDoItems.defaultProps = {
    title: `ToDo`
};

export default ToDoItems;