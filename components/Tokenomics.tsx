import React from 'react';

const StatBox: React.FC<{ label: string, value: string }> = ({ label, value }) => (
  <div className="bg-white border-4 border-black p-4 rounded-2xl neo-shadow flex flex-col items-center justify-center">
    <div className="text-[10px] font-black uppercase opacity-40 mb-1">{label}</div>
    <div className="font-comic text-2xl uppercase">{value}</div>
  </div>
);

const Tokenomics: React.FC = () => {
  const MASCOT_URL = "https://i.etsystatic.com/40533556/r/il/c05622/4679008741/il_fullxfull.4679008741_nkwa.jpg";

  return (
    <section id="tokenomics" className="py-24 px-4 bg-dot-pattern border-b-4 border-black">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl md:text-8xl font-comic text-black mb-16 drop-shadow-[4px_4px_0px_#fff] uppercase">
          COLD HARD <br/> YETINOMICS
        </h2>
        
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-16">
          {/* Progress Circle */}
          <div className="relative">
            <div className="w-56 h-56 rounded-full border-8 border-black bg-white flex flex-col items-center justify-center neo-shadow">
               <span className="text-6xl font-comic text-[#4db6ff]">100%</span>
               <span className="text-xs font-black uppercase tracking-widest">COMMUNITY</span>
            </div>
            <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-yellow-300 border-4 border-black rounded-full flex items-center justify-center">
               <span className="text-xl">💰</span>
            </div>
          </div>

          {/* Grid Stats */}
          <div className="grid grid-cols-2 gap-4">
             <StatBox label="TOTAL SUPPLY" value="1 BILLION" />
             <StatBox label="CHAIN" value="SOLANA" />
             <StatBox label="PLATFORM" value="PUMP.FUN" />
             <StatBox label="BUY/SELL TAX" value="0%" />
          </div>

          {/* Mascot Box */}
          <div className="bg-white p-6 border-4 border-black rounded-[2.5rem] neo-shadow rotate-3">
             <img src={MASCOT_URL} className="w-48 h-48 object-cover border-4 border-black rounded-2xl" alt="Mascot" />
          </div>
        </div>

        {/* Contract Address */}
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute -top-4 -left-4 bg-black text-white px-4 py-1 rounded-lg font-comic text-xs uppercase z-10">
            CONTRACT
          </div>
          <div className="bg-white border-4 border-black p-8 rounded-[2rem] neo-shadow">
            <div className="font-mono text-xl md:text-2xl text-sky-500 font-bold overflow-hidden text-ellipsis">
              Yetixx...PumpFun...Soon
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;