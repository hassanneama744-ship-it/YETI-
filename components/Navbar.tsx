import React from 'react';
import { ShoppingCart } from 'lucide-react';

const Navbar: React.FC = () => {
  const LOGO_URL = "https://i.etsystatic.com/40533556/r/il/c05622/4679008741/il_fullxfull.4679008741_nkwa.jpg";

  return (
    <nav className="fixed top-4 left-0 right-0 z-[100] px-4">
      <div className="max-w-4xl mx-auto bg-white border-4 border-black px-6 py-2 rounded-2xl flex items-center justify-between neo-shadow">
        <div className="flex items-center gap-3">
          <img src={LOGO_URL} alt="Yeti" className="w-8 h-8 rounded-full border-2 border-black" />
          <span className="font-comic text-xl text-black">YETI</span>
        </div>
        
        {/* Navigation links removed as per user request */}
        
        <button className="flex items-center gap-2 bg-[#4db6ff] text-white border-2 border-black px-4 py-2 rounded-xl font-comic text-xs hover:translate-y-0.5 active:translate-y-0 transition-transform">
          <ShoppingCart size={14} />
          <span>BUY $YETI</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;