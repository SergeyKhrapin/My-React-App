import React from 'react';

const ImageList = props => {
   return (
      <ul className="image-list">
         {
            props.images.map((img, i) =>
               <li key={i}><img src={img.urls.thumb} alt={img.alt_description} /></li>
            )
         }
      </ul>
   );
};

export default ImageList;
