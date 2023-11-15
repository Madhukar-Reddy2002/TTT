import React from 'react';
import Image from 'next/image';
import cvr from '../images/nature.webp';
import im from '../images/1000032689_x16_drawing.png'

function Profile() {
  return (
    <div className=' flex flex-col'>
      <Image 
        src={cvr}
        priority
        alt="COVER PHOTO"
        className='w-full h-[35vw] lg:h-[25vw] object-cover object-center'
      />

      <div className=' pl-5'>
        <div className='flex'>
        <Image
          src={im}
          alt="PROFILE IMAGE"
          className='h-[150px] w-[150px] lg:h-[250px] lg:w-[250px] rounded-full object-cover border relative -top-[50px]'
        />
        
        <div className='pl-8'>
          <h1 className='text-[4vw] font-bold text-center p-2'>Madhukar 💎 ✅</h1>
          
          <div className='flex gap-4 justify-around'>
            <div>
              <p className='font-medium text-[3vw] text-gray-700 border px-2 py-1 rounded-lg text-center'>5555</p>
              <p className='text-sm text-gray-500 text-center lg:text-[1.5vw]'>Followers</p>
            </div>
            
            <div>
              <p className='font-medium text-[3vw] text-gray-700 border px-2 py-1 rounded-lg text-center'>222</p>
              <p className='text-sm text-gray-500 text-center lg:text-[1.5vw]'>Following</p>
            </div>
          </div>
        </div>
            
        </div>
        <div className=' relative -top-8'>
        <h3 className='text-[3vw]'>Co-Founder of MS tech</h3>
        
        <a href="https://www.linkedin.com/in/dandumadhukarreddy/" className='text-[3vw] lg:text-xl text-blue-500 hover:text-yellow-600'>
          https://www.linkedin.com/in/dandumadhukarreddy/
        </a>
        
        <div className='flex gap-3 pt-6'>
          <div className='py-2 min-w-[15vw] w-fit text-center text-[3vw]'>🌟 25k</div>
          <div className='py-2 min-w-[15vw] w-fit text-center text-[3vw]'>👍 12k</div>
          <div className='py-2 min-w-[15vw] w-fit text-center text-[3vw]'>👁️ 95k</div>
          <div className='py-2 min-w-[15vw] w-fit text-center text-[3vw]'> <span className='animate-pulse'>❤️</span> 1250</div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Profile;