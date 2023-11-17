import React from 'react';
import Navbar from './components/navbar.jsx';
import Profile from './components/profile.jsx';
import Post from './components/post.jsx';

const App = () => {
  return (
    <main className=" w-full h-full bg-white border-black text-black overflow-x-hidden">
      <Navbar />
      <Profile />
      <div className='p-3 rounded-sm w-fit text-[4vw] lg:text-[2vw] border-t-2 border-l-2 border-r-2'>{143} POSTS</div>
      <Post
        title="Remote Learning Challenges"
        body="The pandemic forced remote learning with little preparation, leading to disparities in access and quality. Educators made impressive efforts but virtual fatigue took a toll. Hybrid schooling continues to evolve globally."
        date="May 2"
        views={422}
        read={201}
        type="musing"
      />
      
      <Post 
        title="Fast Fashion's Environmental Impact"
        body="The fast fashion industry produces over 92 million tons of waste annually and relies on environmentally harmful materials like polyester. Brands like H&M and Zara prioritize speed over sustainability."
        date="April 22"
        views={754}
        read={364}
        type="thought"
      />
      
      <Post
        title="The Hot Job Market"
        body="The pandemic triggered mass resignations as workers reassessed priorities and demands. This created a hot, employee-friendly job market with employers competing for talent by offering higher pay and flexibility."
        date="March 23"
        views={831}
        read={521}
        type="musing"
      />
      
      <Post
        title="The Growth of Online Grocery"
        body="The pandemic necessitated grocery delivery. Services like Instacart and grocery pick-up expanded, accelerating the online grocery trend. Convenience and safety make this habit stick post-pandemic." 
        date="March 19"
        views={623}
        read={412}
        type="thought"
      />
      
      <Post
        title="Streaming's Competitive Landscape" 
        body="Netflix dominated for years, but competition has heated up with new streaming services. Low monthly costs and original content help platforms fight for market share while consumers toggle services."
        date="March 5"
        views={934}
        read={671}
        type="thought"
      />
      
    </main>
  );
};

export default App;