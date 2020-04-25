import React from 'react';
import Axios from 'axios';
import SearchBar from './search/SearchBar';
import ImageList from './search/ImageList';
import SectionTitle from './utilities/SectionTitle';

class Search extends React.Component {
   constructor() {
      console.log('Search constructor');
      super();
      this.clientID = 'ItFVv0-zO8RkEUZLoafE4bLKLpQrIPQPJleyOTwyD_4';
      this.state = {
         images: null
      };
      this.handleSearchForm = this.handleSearchForm.bind(this);
   }

   handleSearchForm(e) {
      e.preventDefault();
      const queryTerm = e.target.elements[0].value;
      const resourceUrl = 'https://api.unsplash.com/search/photos/';

      /* AJAX - start */
      // const xhr = new XMLHttpRequest();
      // xhr.open('GET', `${resourceUrl}?client_id=${this.clientID}&query=${queryTerm}`);
      // xhr.onreadystatechange = () => {
      //    if (xhr.readyState === xhr.DONE) {
      //       if (xhr.status === 200) {
      //          this.setState({
      //             images: JSON.parse(xhr.response).results
      //          });
      //       }
      //    }
      // }
      // xhr.send();
      /* AJAX - end */

      /* Fetch - start */
      // const serverResponse = fetch(`${resourceUrl}?client_id=${this.clientID}&query=${queryTerm}`);
      // serverResponse.then(
      //    response => {
      //       const responseJSON = response.json();
      //       responseJSON.then(responseBody => {
      //          this.setState({
      //             images: responseBody.results
      //          });
      //       })
      //    }
      // );
      /* Fetch - end */

      /* Axios - start */
      const serverResponse = Axios.get(resourceUrl, {
         params: {
            client_id: this.clientID,
            query: queryTerm
         }
      });
      serverResponse.then(
         response => {
            this.setState({
               images: response.data.results
            });
         }
      );
      /* Axios - end */
   }

   render() {
      console.log('Search render');
      return(
         <div className="Search">
            <section className="section search-section">
               <SectionTitle title="Search" />
               <SearchBar handleSearchForm={this.handleSearchForm} />
               {this.state.images && <ImageList images={this.state.images} />}
            </section>
         </div>
      );
   }
}

export default Search;
