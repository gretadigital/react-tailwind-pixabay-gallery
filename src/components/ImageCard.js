import React from 'react';

const ImageCard = ({ image }) => {
  const tags = image.tags.split(',');

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={image.webformatURL} alt="random" className="w-full" />
      <div className="px-6 py-4">
        <div className="uppercase text-gray-700 text-xl mb-2">
          Photo by: {image.user}
        </div>
        <ul>
          <li>
            <p className="text-gray-700 inline">Views: </p>
            {image.views}
          </li>
          <li>
            <p className="text-gray-700 inline">Downloads: </p>
            {image.downloads}
          </li>
          <li>
            <p className="text-gray-700 inline">Likes: </p>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-6">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 text-gray-700"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
