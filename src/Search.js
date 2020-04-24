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
      xhr.open('GET', `https://api.unsplash.com/search/photos/?client_id=${this.clientID}&query=bicycle`);
      xhr.onreadystatechange = () => {
         if (xhr.readyState === xhr.DONE) {
            if (xhr.status === 200) {
               this.setState({
                  images: JSON.parse(xhr.response).results
               });
            }
         }
         console.log('onreadystatechange');
         console.log(xhr);
      }
      xhr.send();
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