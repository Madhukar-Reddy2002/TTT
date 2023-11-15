"use client"
import React, {useEffect} from 'react';
import gsap from 'gsap';

const Navbar = React.forwardRef((props, ref) => {
  const nb = React.createRef();
  const bb = React.createRef();
  useEffect(() => {
    gsap.set(nb.current, { x: -100 });
    gsap.to(nb.current, {
      duration: 1,
      x: 0,
      ease: "bounce",
      stagger:0.5
    });
    console.log("i am on");
  }, [ ]);
  useEffect(() => {
    gsap.set(bb.current, { x: 200 });
    gsap.to(bb.current, {
      duration: 1,
      x: 0,
      ease: "bounce",
    });
    console.log("i am on");
  }, [ ]);

  return (
    <div className='flex justify-between items-center px-4 py-3 bg-black text-white'>
      <div ref={nb} className='lg:text-[2vw] text-[3.5vw] font-bold'>
        TTT STORIES
      </div>
      <button ref={bb}
        className='bg-yellow-500 text-white rounded py-2 px-4 lg:text-[1.5vw] text-[3vw] font-semibold hover:scale-95 hover:translate-y-1'
      >
        Courses
      </button>
    </div>
  );
});

export default Navbar;
