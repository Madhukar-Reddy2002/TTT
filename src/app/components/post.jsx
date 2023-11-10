import React from 'react';

function Post({ title, body, date, views, read, type }) {

  return (

    <div className='px-5 py-10 border-t-2 rounded-lg'>
      <div className='flex justify-between'>
      <h2 className=' font-bold text-xl py-2'>{title}</h2>
      <p>👍</p>
      </div>
      <p className=' py-3'>{body}</p>
      <footer className='text-sm flex justify-between py-2'>
        <h2>
          <span className='text-blue-400'>{type} </span>by Madhukar
        </h2>
        <h2 className='font-light'>
        {date} • {read} mins Read • {views} views
        </h2>
        </footer>
    </div>

  );

}

export default Post;