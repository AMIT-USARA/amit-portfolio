
import React from 'react';
import Introduction from './pages/Introduction';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div className="w-[calc(100vw-14.6px)] h-[400vh] overflow-x-hidden flex flex-col justify-center items-center bg-gradient-to-bl from-black to-black/85">
      <Introduction />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
