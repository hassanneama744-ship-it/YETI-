import React from 'react';
import { Twitter } from 'lucide-react';

const Socials: React.FC = () => {
  const DEX_SCREENER_URL = "https://images.apifyusercontent.com/NtX7v0_NGm_nR95ljRYDySuBs9nmhWPuAg8bzinmPfY/rs:fill:250:250/cb:1/aHR0cHM6Ly9hcGlmeS1pbWFnZS11cGxvYWRzLXByb2QuczMudXMtZWFzdC0xLmFtYXpvbmF3cy5jb20vSElNQUNaaE9uN1lKNzFkVHUtYWN0b3ItZW9GNGp4SlpJdGRrUDMzcjktdlpKQ1c1NjJ2ay1kZXhwbmcucG5n.webp";
  const PUMP_FUN_URL = "https://s3.coinmarketcap.com/static-gravity/image/671df5275f824476bde27e42354a3359.jpg";

  return (
    <footer className="bg-[#002233] pt-24 pb-16 px-4 text-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl md:text-9xl font-comic text-[#4db6ff] mb-8 uppercase drop-shadow-[6px_6px_0px_#000]">
          JOIN THE PACK
        </h2>
        
        <p className="text-white font-bold text-xl mb-2">"Ice should be free for everyone."</p>
        <p className="text-slate-300 font-medium mb-12">Snowballs, memes, and sub-zero gains.</p>
        
        {/* Social Icons - Exactly three: Twitter, DexScreener, and Pump.fun */}
        <div className="flex justify-center gap-4 mb-24">
          {/* Twitter */}
          <a href="#" target="_blank" rel="noopener noreferrer" title="Twitter" className="bg-white border-4 border-black p-4 rounded-[1rem] neo-shadow hover:-translate-y-1 transition-transform">
            <Twitter size={32} className="text-black" />
          </a>
          
          {/* DexScreener */}
          <a href="#" target="_blank" rel="noopener noreferrer" title="DexScreener" className="bg-white border-4 border-black p-4 rounded-[1rem] neo-shadow hover:-translate-y-1 transition-transform flex items-center justify-center">
            <img src={DEX_SCREENER_URL} alt="DexScreener" className="w-8 h-8 object-contain" />
          </a>

          {/* Pump.fun */}
          <a href="#" target="_blank" rel="noopener noreferrer" title="Pump.fun" className="bg-white border-4 border-black p-4 rounded-[1rem] neo-shadow hover:-translate-y-1 transition-transform flex items-center justify-center">
             <img src={PUMP_FUN_URL} alt="Pump.fun" className="w-8 h-8 rounded-full border-2 border-black object-cover" />
          </a>
        </div>

        {/* Footer Bottom Bar - White Pill */}
        <div className="bg-white border-4 border-black rounded-full p-6 flex flex-col md:flex-row items-center justify-between gap-4 max-w-5xl mx-auto neo-shadow mb-10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 bg-sky-100 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-slate-100 rounded-full translate-x-1/2 translate-y-1/2"></div>
          
          <div className="font-comic text-3xl text-black relative z-10">$YETI COIN</div>
          <div className="text-[10px] font-black uppercase text-slate-400 relative z-10">
            © 2025 THE ABOMINABLE SOLANA REVOLUTION
          </div>
        </div>

        {/* Disclaimer */}
        <div className="max-w-3xl mx-auto text-[10px] font-black uppercase text-slate-500 leading-tight">
          DISCLAIMER: $YETI IS A MEME COIN ON SOLANA VIA PUMP.FUN. NO INTRINSIC VALUE, NO FINANCIAL ADVICE. JUST COOL VIBES AND WINTER MADNESS. FREEZE RESPONSIBLY!
        </div>
      </div>
    </footer>
  );
};

export default Socials;