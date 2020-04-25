import React from 'react';
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
      const xhr = new XMLHttpRequest();
      const queryTerm = e.target.elements[0].value;
      const resourcePath = `https://api.unsplash.com/search/photos/?client_id=${this.clientID}&query=${queryTerm}`;

      /* AJAX - start */
      // xhr.open('GET', resourcePath);
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
      const serverResponse = fetch(resourcePath);
      serverResponse.then(
         response => {
            const responseJSON = response.json();
            responseJSON.then(responseBody => {
               this.setState({
                  images: responseBody.results
               });
            })
         }
      );
      /* Fetch - end */

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
