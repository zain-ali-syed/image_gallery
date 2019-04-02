import React from 'react';

const ImagesColumn = ({ images }) => {
  return (
    <div className="column">
      {images.map(image => {
        return <img src={image.webformatURL} alt="someimage" />;
      })}
    </div>
  );
};

export default ImagesColumn;
