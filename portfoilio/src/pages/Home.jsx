import React from 'react'
import SkillsSection from '../Model/skill'
import TextUp from '../components/TextUp'
import LaserFlow from '../components/laserAnimation'
import { Link } from 'react-router-dom'





function Home({ onNavigate }) {
  return (

    <div style={{ position: 'relative', minHeight: '100vh', background: '#000' }}>

      {/* Background Animation - Fixed Layer */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: "20%",
        width: '100%',
        height: '100%',
        zIndex: 0,
        alpha: false
      }}>
        <LaserFlow
          color="#E8E5EB"
          wispDensity={1}
          fogIntensity={0.45}
        />
      </div>
      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* desging navbar */}
        <div className='flex justify-between items-center text-white'>VR</div>
        <div className='hidden md:flex justify-center items-center flex-grow gap-5 text-white '>
          <Link to="/project" className='font-Poppins text-xl'>Project</Link>
          <Link to="/skill" className='font-Poppins text-xl'>Skill</Link>
          <Link to="/connectUs" className='font-Poppins text-xl'>Connect</Link>
          <Link to="/github" className='ml-4 text-xl text-blue-300'>GitHub</Link>

        </div>
        {/* done designing navbar */}


        {/* now to design the main content */}

        <div className='flex flex-col justify-center items-center text-white gap-5'>
          <img src='src/assets/iron-man-5783522_1280.webp' className='w-40 h-50 rounded-full pt-[40px]' alt='profile' />
          <TextUp
            text="Vishal Raghav"
            className='text-6xl font-bold text-white font-mono mb-2'
          />
          <p className='text-gray-400 text-base text-center pt-5 mb-4 '>Full-Stack Developer (MERN) Intern @ DigiVikreta |  Univiserty of Mangalaytan
            <span className='bl;ock text-white flex items-centre justify-center'>
              <div className='flex items-center justify-center'>
                <span className="inline-flex w-3 h-3 mr-2 bg-[#32d74b] rounded-full opacity-30 shadow-[0_0_14px_rgba(50,215,75,0.965)]">

                </span>
                <span>Exploring opportunities in SDE, web and App devlopment, and IT roles.</span>
              </div>
            </span>
          </p>

          <div className='relative h-[100px]'>
            <div className='max-w-auto mx-auto'>
              <div className='p-4 rounded-full bg-blue-500 text-white my-2 opacity-1 transform-tanslateY(0%) translateZ(0px)'>Eager to explore opportunities, computer engineering,web devlopment , app development and Dsa</div>
            </div>
          </div>
        </div>

        {/* done designing the main content */}

        {/* now to design the other piece of website */}
        <div className='max-w-6xl mx-auto py-12 '>
          <h2 className='text-4xl font-bold text-gray-200 mb-6 text-start pl-6'>Work</h2>
          <div className='flex flex-col lg:flex-row p-6 lg:p-10 rounded-3xl shadow-2xl'>
            <div className='relative w-full lg-w-1/2 rounded-3xl shadow-md overflow-hidden'>
              <div className='opacity-1 transform-none'>
                <img src='src/assets/work1.0ab38d624907ca59d9eb.png' alt='ironman' className='w-max-[600px] h-max-[400px]' />
              </div>
              <button className='absoulte bottom-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-full'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-circle ">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m10 8 4 4-4 4"></path>
                </svg>
              </button>
            </div>
            <div className='mt-4 lg:mt-0 lg:w1/2 text-left lg:pl-6 opacity-1 transform-none'>
              <p class="text-2xl font-bold text-gray-200 mb-2">DigiVikerta</p>
              <p class="text-lg text-gray-400 mb-4">Frontend Developer</p>
              <ul className='space-y-3 text-justify'>
                <li className='text-base text-gray-500'>Developed responsive and intuitive web applications using React, Tailwind CSS, and standard CSS.
                  ensuring a smooth experience across various devices and screen sizes</li>
                <li className='text-base text-gray-500'> Integrated multiple APIs into React applications, enabling dynamic data display and real-time
                  functionality</li>
                <li className='text-base text-gray-500'>Created visually appealing and maintainable UI components by leveraging Tailwind CSS utility classes
                  along with eustom styles in standard CSS</li>
                <li className='text-base text-gray-500'>Enhanced frontend performance through effective state management and optimized coding techniques,
                  resulting in faster and more responsive applications.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* now to degin project section */}

        <div className='max-w-6xl mx-auto py-12 '>
          <h2 className='text-4xl font-bold text-gray-200 mb-6 text-start pl-6'>Project</h2>
          <div className='flex flex-col lg:flex-row p-6 lg:p-10 rounded-3xl shadow-2xl'>
            <div className='mt-4 lg:mt-0 lg:w-1/2 text-left lg:pr-6 opacity-1 transform-none'>
              <p className="text-2xl font-bold text-gray-200 mb-2">DigiVikerta</p>
              <p className="text-lg text-gray-400 mb-4">Frontend Developer</p>
              <ul className='space-y-3 text-justify'>
                <li className='text-base text-gray-500'>Developed responsive and intuitive web applications using React, Tailwind CSS, and standard CSS.
                  ensuring a smooth experience across various devices and screen sizes</li>
                <li className='text-base text-gray-500'> Integrated multiple APIs into React applications, enabling dynamic data display and real-time
                  functionality</li>
                <li className='text-base text-gray-500'>Created visually appealing and maintainable UI components by leveraging Tailwind CSS utility classes
                  along with eustom styles in standard CSS</li>
                <li className='text-base text-gray-500'>Enhanced frontend performance through effective state management and optimized coding techniques,
                  resulting in faster and more responsive applications.</li>
              </ul>
            </div>
            <div className='relative w-full lg:w-1/2 rounded-3xl shadow-md overflow-hidden'>
              <div className='opacity-1 transform-none'>
                <img src='src/assets/project1.38840dd870dce0990f03.webp' alt='ironman' className='w-max-[600px] h-max-[400px]' />
              </div>
              <button className='absolute bottom-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-full'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right-circle ">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m10 8 4 4-4 4"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* rendidring skill section */}

        <div className="max-w-6xl mx-auto py-12">
          <h2 className="text-4xl font-bold text-gray-200 mb-8">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind', 'JavaScript', 'Git', 'REST APIs'].map(skill => (
              <div key={skill} className="bg-gray-900 bg-opacity-50 backdrop-blur-sm p-6 rounded-xl text-center text-white">
                {skill}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div >
  )
}

export default Home
