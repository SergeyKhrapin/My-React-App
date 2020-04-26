import React from 'react';

const SearchBar = props => {
   return (
      <form onSubmit={e => props.handleSearchForm(e)}>
         <input type="search" placeholder="Enter your serach term" />
      </form>
   );
};

export default SearchBar;
