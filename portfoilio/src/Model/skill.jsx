import React from 'react';
import { useEffect, useState } from 'react';

const AnimatedSkillsSection = () => {
  // Skills data with icons and names
  const skillsRow1 = [
    { name: 'C++', icon: '🔵' },
    { name: 'MATLAB', icon: '📊' },
    { name: 'JavaScript', icon: '📜' },
    { name: 'React', icon: '⚛️' },
    { name: 'HTML5', icon: '🟠' },
    { name: 'CSS3', icon: '🔷' },
    { name: 'TailWindCSS', icon: '💨' },
    { name: 'Flask', icon: '🧪' },
    { name: 'Django', icon: '🌐' },
    { name: 'Python', icon: '🐍' },
    { name: 'Java', icon: '☕' },
  ];

  const skillsRow2 = [
    { name: 'MLlib', icon: '📚' },
    { name: 'Pandas', icon: '🐼' },
    { name: 'NumPy', icon: '🧮' },
    { name: 'Matplotlib', icon: '📈' },
    { name: 'Seaborn', icon: '📊' },
    { name: 'PowerBI', icon: '📊' },
    { name: 'Apache Hadoop', icon: '🐘' },
    { name: 'Apache Spark', icon: '✨' },
    { name: 'TensorFlow', icon: '🧠' },
    { name: 'Keras', icon: '🔢' },
    { name: 'Scikit-Learn', icon: '🤖' },
    { name: 'PyTorch', icon: '🔥' },
  ];

  const skillsRow3 = [
    { name: 'Google Cloud Platform (GCP)', icon: '☁️' },
    { name: 'Docker', icon: '🐳' },
    { name: 'CI/CD Tools', icon: '🔄' },
    { name: 'SQL', icon: '📝' },
    { name: 'Azure', icon: '💠' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Git', icon: '📂' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Redis', icon: '🔴' },
    { name: 'GraphQL', icon: '🔷' },
  ];

  return (
    <div className="bg-black w-full py-12 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-4xl font-bold text-gray-200 mb-10 text-start items-start self-start">Skills</h2>
      </div>

      {/* First row - Left to Right */}
      <div className="relative flex overflow-hidden mb-6">
        <div className="animate-marquee-right flex">
          {[...skillsRow1, ...skillsRow1].map((skill, index) => (
            <div 
              key={`row1-${index}`}
              className="flex items-center bg-gray-900 rounded-full px-4 py-2 mx-2 min-w-max"
            >
              <span className="mr-2">{skill.icon}</span>
              <span className="text-gray-300">#{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Second row - Right to Left */}
      <div className="relative flex overflow-hidden mb-6">
        <div className="animate-marquee-left flex">
          {[...skillsRow2, ...skillsRow2].map((skill, index) => (
            <div 
              key={`row2-${index}`}
              className="flex items-center bg-gray-900 rounded-full px-4 py-2 mx-2 min-w-max"
            >
              <span className="mr-2">{skill.icon}</span>
              <span className="text-gray-300">#{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Third row - Left to Right */}
      <div className="relative flex overflow-hidden">
        <div className="animate-marquee-right flex" style={{animationDuration: '35s'}}>
          {[...skillsRow3, ...skillsRow3].map((skill, index) => (
            <div 
              key={`row3-${index}`}
              className="flex items-center bg-gray-900 rounded-full px-4 py-2 mx-2 min-w-max"
            >
              <span className="mr-2">{skill.icon}</span>
              <span className="text-gray-300">#{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
};

// Add the animation keyframes to your global CSS or use a styled-components approach
// This is what you need to add to your global CSS file
const GlobalStyles = () => (
  <style jsx global>{`
    @keyframes marquee-right {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    
    @keyframes marquee-left {
      0% { transform: translateX(-50%); }
      100% { transform: translateX(0); }
    }
    
    .animate-marquee-right {
      animation: marquee-right 30s linear infinite;
    }
    
    .animate-marquee-left {
      animation: marquee-left 30s linear infinite;
    }
  `}</style>
);

export default function SkillsSection() {
  return (
    <>
      <GlobalStyles />
      <AnimatedSkillsSection />
    </>
  );
}