import React from 'react';

class SearchBar extends React.Component {
   // constructor(props) {
   //    super(props);
   // }

   render() {
      return (
         <form onSubmit={e => this.props.handleSearchForm(e)}>
            <input type="search" placeholder="Enter your serach term" />
         </form>
      );
   }
}

export default SearchBar;