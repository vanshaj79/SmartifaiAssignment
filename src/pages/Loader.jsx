import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md backdrop-brightness-50">
      <div className='text-7xl'>Loading...</div>
    </div>
  );
}

export default Loader;
