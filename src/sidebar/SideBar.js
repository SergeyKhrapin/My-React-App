import React from 'react';

const SideBar = props => {
    return (
        <aside className="sidebar section">
            <div className="sidebar-top">
                {props.top}
            </div>
            <div className="sidebar-bottom">
                {props.bottom}
            </div>
        </aside>
    );
}

export default SideBar;
