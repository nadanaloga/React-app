// src/components/Card.js

import React from 'react';
import { useSpring, animated } from 'react-spring';

const Card = ({ imageUrl, title, content, link }) => {
  const props = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { duration: 500 },
  });

  return (
  <animated.div className="max-w-xs flex flex-col rounded overflow-hidden shadow-lg m-4" style={props}>
      <div className="flex justify-center py-4">
        <img className="w-24 h-auto object-cover" src={imageUrl} alt="Card image" />
      </div>
      <div className="flex-1 px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {content}
        </p>
      </div>
      <div className="px-6 py-4">
        <a href={link} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Read more
        </a>
      </div>
    </animated.div>
  );
};

export default Card;
