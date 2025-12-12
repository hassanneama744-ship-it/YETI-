import React from 'react';
import { Snowflake } from 'lucide-react';

const Hero: React.FC = () => {
  const MASCOT_URL = "https://i.etsystatic.com/40533556/r/il/c05622/4679008741/il_fullxfull.4679008741_nkwa.jpg";

  return (
    <section className="relative pt-32 pb-20 px-4 bg-dot-pattern-white overflow-hidden">
      {/* Background elements */}
      <Snowflake className="absolute top-20 left-10 text-sky-200 opacity-40 animate-pulse" size={80} />
      <Snowflake className="absolute bottom-10 right-10 text-sky-200 opacity-40 animate-bounce" size={120} />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Mascot Container */}
        <div className="relative inline-block mb-10">
          <div className="bg-white border-4 border-black p-4 rounded-[2.5rem] neo-shadow mx-auto">
            <img 
              src={MASCOT_URL} 
              alt="Yeti Mascot" 
              className="w-40 h-40 md:w-56 md:h-56 object-cover rounded-[2rem]"
            />
          </div>
          <div className="absolute -top-4 -right-4 bg-yellow-300 text-black px-4 py-1 border-4 border-black rounded-full font-comic text-lg rotate-12 neo-shadow">
            SUB-ZERO!
          </div>
        </div>

        {/* Title */}
        <h1 className="text-6xl md:text-8xl font-comic text-black mb-6 tracking-tight">
          YETI COIN
        </h1>
        
        {/* Slogan */}
        <p className="text-xl md:text-2xl font-bold mb-10 max-w-2xl mx-auto leading-relaxed">
          The <span className="bg-sky-400 text-white px-2 py-0.5 rounded">abominable snowman</span> has landed on Solana. <br/>
          Launched on <span className="underline decoration-sky-400 underline-offset-4">pump.fun</span> – Peak Gain 1000x Ready ❄️
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="#" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-[#4db6ff] text-white px-10 py-4 border-4 border-black rounded-2xl font-comic text-xl hover:translate-x-1 hover:translate-y-1 transition-all neo-shadow active:shadow-none uppercase text-center block">
            BUY ON PUMP.FUN
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-white text-black px-10 py-4 border-4 border-black rounded-2xl font-comic text-xl hover:translate-x-1 hover:translate-y-1 transition-all neo-shadow active:shadow-none uppercase text-center block">
            TWITTER
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;