import React from 'react';

function Author({author}) {
    return (
        <div className="UserInfo">
          <img className="Avatar"
            src={author.avatarUrl}
            alt={author.name}
          />
          <div className="UserInfo-name">
            {author.name}
          </div>
        </div>
    )
}

export default Author;