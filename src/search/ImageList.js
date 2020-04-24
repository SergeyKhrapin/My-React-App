import React from 'react';

class ImageList extends React.Component {
   render() {
      return (
         <ul className="image-list">
            {
               this.props.images.map(img => {
                  return (
                     <li><img src={img.urls.thumb} alt={img.alt_description} /></li>
                  );
               })
            }
         </ul>
      );
   };
}

export default ImageList;