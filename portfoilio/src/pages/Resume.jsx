import React from "react";


const Resume = () => {
  const resumeURL = "/vansh_Resume.pdf"; // path from public folder

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 py-4">
      {/* <h1 className="text-3xl font-bold mb-2">My Resume</h1> */}

      {/* Resume Preview */}
      <div className="w-full max-w-4xl h-[100vh] shadow-lg border rounded-lg ">
        <iframe
          src={resumeURL}
          width="100%"
          height="100%"
          title="Resume Preview"
        ></iframe>
      </div>

      {/* Back to Home Button */}
      <a
        href="/"
        className="mt-6 flex items-center gap-2 bg-gray-900 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
      >
        Back to Home
      </a>

    </div>
  );
};

export default Resume;
