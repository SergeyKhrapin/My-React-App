import React from 'react';

function ListItems(props) {
    const arr = props.items;
    
    const listItems = arr.map((el)=> {
        return <li>item #{el}</li>;
    });

    return <ul>{listItems}</ul>;
}

export default ListItems;