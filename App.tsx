import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Roadmap from './components/Roadmap';
import Tokenomics from './components/Tokenomics';
import Socials from './components/Socials';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f0f9ff] text-black">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Marquee />
        <Roadmap />
        <Marquee />
        <Tokenomics />
        <Marquee />
      </main>
      <Socials />
    </div>
  );
};

export default App;