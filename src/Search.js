import React from 'react';
import SearchBar from './search/SearchBar';
import ImageList from './search/ImageList';
import SectionTitle from './utilities/SectionTitle';
import unsplash from './api/unsplash';

class Search extends React.Component {
   constructor() {
      super();
      this.state = {
         images: []
      };
      this.handleSearchForm = this.handleSearchForm.bind(this);
   }

   async handleSearchForm(e) {
      e.preventDefault();

      // Fetch
      // const serverResponseRaw = await fetch(`https://api.unsplash.com/search/photos?client_id=ItFVv0-zO8RkEUZLoafE4bLKLpQrIPQPJleyOTwyD_4&query=${e.target.elements[0].value}`);
      // const serverResponse = await serverResponseRaw.json();
      // this.setState({
      //    images: serverResponse.results
      // });

      const serverResponse = await unsplash.get('/search/photos', {
         params: {
            query: e.target.elements[0].value
         }
      });

      this.setState({
         images: serverResponse.data.results
      });
   }

   render() {
      return(
         <div className="Search">
            <section className="section search-section">
               <SectionTitle title="Search" />
               <SearchBar handleSearchForm={this.handleSearchForm} />
               {this.state.images.length ? <ImageList images={this.state.images} /> : ''}
            </section>
         </div>
      );
   }
}

export default Search;
