// src/pages/Home.jsx
import React from 'react';
import LaserFlow from '../components/LaserFlow';
// import SkillsSection from '../Model/skill';
// import TextUp from '../components/TextUp';

function Home({ onNavigate }) {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: '#000' }}>
      
      {/* Background Animation - Fixed Layer */}
      <div style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: 0 
      }}>
        <LaserFlow 
          color="#00BFFF"
          wispDensity={1}
          fogIntensity={0.45}
        />
      </div>

      {/* Content Layer - Scrollable */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Navbar */}
        <div className='flex justify-between items-center text-white p-6'>
          <div className='text-2xl font-bold'>VR</div>
          <div className='hidden md:flex justify-center items-center flex-grow gap-5 text-white'>
            <div className='flex font-Poppins text-xl cursor-pointer hover:text-blue-400'>Work</div>
            <div className='flex font-Poppins text-xl cursor-pointer hover:text-blue-400'>Project</div>
            <div className='flex font-Poppins text-xl cursor-pointer hover:text-blue-400'>Skill</div>
            <div className='flex font-Poppins text-xl cursor-pointer hover:text-blue-400'>Connect</div>
            <button 
              onClick={() => onNavigate && onNavigate('github')} 
              className='ml-4 text-xl text-blue-300 hover:text-blue-400'
            >
              GitHub
            </button>
          </div>
        </div>

        {/* Hero Section */}
        <div className='flex flex-col justify-center items-center text-white gap-5 py-12'>
          <img 
            src='src/assets/iron-man-5783522_1280.webp' 
            className='w-40 h-40 rounded-full object-cover border-4 border-blue-500' 
            alt='profile' 
          />
          
          <h1 className='text-6xl font-bold text-white font-mono mb-2'>
            Vishal Raghav
          </h1>
          
          <p className='text-gray-400 text-base text-center px-4 max-w-2xl'>
            Full-Stack Developer (MERN) Intern @ DigiVikreta | University of Mangalaytan
            <span className='block text-white flex items-center justify-center mt-3'>
              <span className="inline-flex w-3 h-3 mr-2 bg-[#32d74b] rounded-full opacity-75 shadow-[0_0_14px_rgba(50,215,75,0.965)]" />
              <span>Exploring opportunities in SDE, web and App development, and IT roles.</span>
            </span>
          </p>

          <div className='relative mt-6'>
            <div className='max-w-3xl mx-auto'>
              <div className='p-4 rounded-full bg-blue-500 bg-opacity-80 backdrop-blur-sm text-white text-center'>
                Eager to explore opportunities in computer engineering, web development, app development and DSA
              </div>
            </div>
          </div>
        </div>

        {/* Work Section */}
        <div className='bg-transparent p-5 w-full max-w-6xl mx-auto'>
          <h2 className='text-4xl font-bold text-gray-200 mb-6 text-start pl-6'>Work</h2>
          <div className='flex flex-col lg:flex-row p-6 lg:p-10 rounded-3xl shadow-2xl bg-gray-900 bg-opacity-50 backdrop-blur-sm'>
            <div className='relative w-full lg:w-1/2 rounded-3xl shadow-md overflow-hidden'>
              <img 
                src='src/assets/work1.0ab38d624907ca59d9eb.png' 
                alt='work' 
                className='w-full h-auto rounded-2xl' 
              />
              <button className='absolute bottom-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-full transition-colors'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m10 8 4 4-4 4"></path>
                </svg>
              </button>
            </div>
            
            <div className='mt-4 lg:mt-0 lg:w-1/2 text-left lg:pl-6'>
              <p className="text-2xl font-bold text-gray-200 mb-2">DigiVikreta</p>
              <p className="text-lg text-gray-400 mb-4">Frontend Developer</p>
              <ul className='space-y-3 text-justify'>
                <li className='text-base text-gray-300'>
                  Developed responsive and intuitive web applications using React, Tailwind CSS, and standard CSS, 
                  ensuring a smooth experience across various devices and screen sizes
                </li>
                <li className='text-base text-gray-300'>
                  Integrated multiple APIs into React applications, enabling dynamic data display and real-time functionality
                </li>
                <li className='text-base text-gray-300'>
                  Created visually appealing and maintainable UI components by leveraging Tailwind CSS utility classes 
                  along with custom styles in standard CSS
                </li>
                <li className='text-base text-gray-300'>
                  Enhanced frontend performance through effective state management and optimized coding techniques, 
                  resulting in faster and more responsive applications
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Project Section */}
        <div className='bg-transparent p-5 w-full max-w-6xl mx-auto'>
          <h2 className='text-4xl font-bold text-gray-200 mb-6 text-start pl-6'>Project</h2>
          <div className='flex flex-col lg:flex-row-reverse p-6 lg:p-10 rounded-3xl shadow-2xl bg-gray-900 bg-opacity-50 backdrop-blur-sm'>
            <div className='relative w-full lg:w-1/2 rounded-3xl shadow-md overflow-hidden'>
              <img 
                src='src/assets/project1.38840dd870dce0990f03.webp' 
                alt='project' 
                className='w-full h-auto rounded-2xl' 
              />
              <button className='absolute bottom-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-full transition-colors'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m10 8 4 4-4 4"></path>
                </svg>
              </button>
            </div>
            
            <div className='mt-4 lg:mt-0 lg:w-1/2 text-left lg:pr-6'>
              <p className="text-2xl font-bold text-gray-200 mb-2">Featured Project</p>
              <p className="text-lg text-gray-400 mb-4">Full Stack Application</p>
              <ul className='space-y-3 text-justify'>
                <li className='text-base text-gray-300'>
                  Developed responsive and intuitive web applications using React, Tailwind CSS, and standard CSS, 
                  ensuring a smooth experience across various devices and screen sizes
                </li>
                <li className='text-base text-gray-300'>
                  Integrated multiple APIs into React applications, enabling dynamic data display and real-time functionality
                </li>
                <li className='text-base text-gray-300'>
                  Created visually appealing and maintainable UI components by leveraging Tailwind CSS utility classes 
                  along with custom styles in standard CSS
                </li>
                <li className='text-base text-gray-300'>
                  Enhanced frontend performance through effective state management and optimized coding techniques, 
                  resulting in faster and more responsive applications
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Skills Section - Uncomment when ready */}
        {/* <SkillsSection /> */}

      </div>
    </div>
  );
}

export default Home;