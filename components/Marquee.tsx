import React from 'react';

const Marquee: React.FC = () => {
  const items = [
    "NEXT 1000X MEME",
    "$YETI ON SOLANA",
    "STAY FROSTY",
    "PUMP.FUN ORIGINS",
    "$YETI TO THE PEAK",
    "ABOMINABLE GAINS"
  ];
  const content = [...items, ...items, ...items, ...items];

  return (
    <div className="relative z-20 border-y-4 border-black py-4 bg-[#4db6ff] overflow-hidden">
      <div className="marquee flex items-center gap-10">
        {content.map((item, idx) => (
          <div key={idx} className="flex items-center gap-10">
            <span className="font-comic text-2xl text-white uppercase whitespace-nowrap drop-shadow-[2px_2px_0px_#000]">
              {item}
            </span>
            <div className="w-4 h-4 bg-white border-2 border-black rounded-full flex-shrink-0"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;