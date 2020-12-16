import React from 'react';
import ToDoContext from '../context';

// const SectionTtileContent = () => {
//     const context = React.useContext(ToDoContext);
//     return <span>{context}</span>;
// }

class SectionTitleContent extends React.Component {
    static contextType = ToDoContext;

    render() {
        return (
            <span>{this.context}</span>
        );
    }
}

export default SectionTitleContent;
