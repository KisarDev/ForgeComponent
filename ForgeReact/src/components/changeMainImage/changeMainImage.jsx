import React, { useState } from 'react';

export default function ChangeMainImage({ images }) {
  const [mainImage, setMainImage] = useState(images[0]);

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  return (
    <div className="border rounded overflow-hidden">
      <div className="border shadow rounded">
        <img className="max-w-[224px] rounded" src={mainImage} alt="Main" />
      </div>
      <div className="border shadow flex gap-x-1 p-2">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index}`}
            className="w-[32px] h-[32px] cursor-pointer"
            onClick={() => handleThumbnailClick(image)}
          />
        ))}
      </div>
    </div>
  );
}
