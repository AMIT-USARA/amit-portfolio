import React from 'react';

const Contact = () => {
  return (
    <div className="bg-black/50 w-11/12 h-screen text-white flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Contact
        </h1>
        <div className="mt-8 space-y-4">
          <p className="text-lg">
            📧 Email: amit.usara@example.com
          </p>
          <p className="text-lg">
            📱 Phone: +91 12345 67890
          </p>
          <p className="text-lg">
            🌐 LinkedIn: linkedin.com/in/amitusara
          </p>
          <p className="text-lg">
            💻 GitHub: github.com/amitusara
          </p>
        </div>
        <div className="mt-8">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200">
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;