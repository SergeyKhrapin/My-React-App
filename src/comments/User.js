import React from 'react';
import Avatar from './Avatar';

function User({user}) {
    return (
        <div className="UserInfo">
          <Avatar user={user}/>
          <div className="UserInfo-name">
            {user.name}
          </div>
        </div>
    )
}

export default User;