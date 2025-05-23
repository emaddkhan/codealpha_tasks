import React from 'react';

function Loading() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="h-20 w-20 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
    </div>
  );
}

export default Loading;
