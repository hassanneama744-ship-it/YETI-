import React from 'react';

const Step: React.FC<{ num: string, title: string, items: string[], bgColor: string }> = ({ num, title, items, bgColor }) => (
  <div className={`p-8 border-4 border-black rounded-[2.5rem] neo-shadow-lg ${bgColor} relative`}>
    <div className="absolute -top-4 left-6 bg-black text-white px-4 py-1 rounded-lg font-comic text-xs uppercase">
      STEP {num}
    </div>
    <h3 className="font-comic text-3xl mb-6 mt-2 uppercase">{title}</h3>
    <ul className="space-y-3 text-left">
      {items.map((item, i) => (
        <li key={i} className="flex items-center gap-3 font-black text-sm">
          <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const Roadmap: React.FC = () => {
  return (
    <section id="roadmap" className="py-24 px-4 bg-white border-b-4 border-black">
      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-20">
          <h2 className="text-6xl md:text-9xl font-comic text-black leading-none inline-flex items-center gap-4">
            THE <span className="text-[#4db6ff]">SNOWMAP</span>
          </h2>
          <div className="w-24 h-2 bg-black mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Step num="1" title="THE AVALANCHE" bgColor="bg-white" items={["Pump.fun Launch", "1B Token Supply", "Ice-Breaker Memes", "First 1000 Holders"]} />
          <Step num="2" title="FROSTBITE" bgColor="bg-sky-100" items={["Raydium Migration", "DexTools Trending", "Snow-Influencer Blitz", "Community Freeze"]} />
          <Step num="3" title="BLIZZARD" bgColor="bg-[#4db6ff] text-white" items={["Yeti Swap Launch", "NFT Winter Collection", "CEX Peak Listings", "Burn the Frost"]} />
          <Step num="4" title="PEAK DOMINATION" bgColor="bg-[#0a2e45] text-white" items={["Global Snow Domination", "$100M Mcap Peak", "Yeti DAO", "The Coldest Charity"]} />
        </div>
      </div>
    </section>
  );
};

export default Roadmap;