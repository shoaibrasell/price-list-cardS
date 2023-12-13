import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

function MyComponent() {
  return (
    <div>
      <BeakerIcon className="h-6 w-6 text-blue-500" />
      <p>...</p>
    </div>
  )
}

const Feature = ({feature}) => {
  return (
    <div className='flex items-center'>
      <CheckCircleIcon className="h-5 w-5 text-blue-700" />
      <samp className='pl-3 m-1'>{feature}</samp>
    </div>
  );
};

export default Feature;