// eslint-disable-next-line no-unused-vars
import React from 'react';

const Link = ({route}) => {
  return (
    <li className='mr-12 hover:bg-yellow-400'>
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

export default Link;