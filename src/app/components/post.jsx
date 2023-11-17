"use client"
import React, { useEffect, useRef } from 'react';
import gsap, { random } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Ensure you have this imported

gsap.registerPlugin(ScrollTrigger); // Register the ScrollTrigger plugin

function Post({ title, body, date, views, read, type }) {
  const postRef = useRef(null);

  useEffect(() => {
    const postAnimation = gsap.timeline({ paused: true });
    gsap.set(postRef.current, { x:600,  opacity: 0 });

    postAnimation.to(postRef.current, {
      duration: 0.5,
      y: 0,
      x:0,
      opacity: 1,
      ease: 'elastic',
    });

    const postTrigger = {
      trigger: postRef.current,
      start: 'center bottom', // Adjust the start position for the trigger
      end: 'bottom top', // Adjust the end position for the trigger
      scrub: true, // Adjust scrubbing behavior as needed
      onToggle: self => {
        if (self.isActive) {
          postAnimation.play();
        }
      },
    };

    ScrollTrigger.create(postTrigger);

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={postRef} className='px-5 py-10 border-t-2 rounded-lg'>
      <div className='flex justify-between'>
        <h2 className='font-bold text-xl py-2'>{title}</h2>
        <p>👍</p>
      </div>
      <p className='py-3'>{body}</p>
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