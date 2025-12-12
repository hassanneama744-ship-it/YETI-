import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Marquee from './components/Marquee.tsx';
import About from './components/About.tsx';
import Roadmap from './components/Roadmap.tsx';
import Tokenomics from './components/Tokenomics.tsx';
import Socials from './components/Socials.tsx';

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