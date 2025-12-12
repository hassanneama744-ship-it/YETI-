import React, { useState } from 'react';
import { GoogleGenAI, Modality } from "@google/genai";
import { Snowflake } from 'lucide-react';

const MASCOT_URL = "https://i.etsystatic.com/40533556/r/il/c05622/4679008741/il_fullxfull.4679008741_nkwa.jpg";

interface GeneratedMeme {
  id: string;
  url: string;
  prompt: string;
}

const About: React.FC = () => {
  const [prompt, setPrompt] = useState("");
  const [currentImage, setCurrentImage] = useState(MASCOT_URL);
  const [isGenerating, setIsGenerating] = useState(false);
  const [recentMemes, setRecentMemes] = useState<GeneratedMeme[]>([]);

  const generateMeme = async () => {
    if (!prompt.trim()) return;
    
    // Check if API key exists to prevent silent failures
    if (!process.env.API_KEY) {
      console.warn("API Key is missing. Meme generation will not work until configured.");
      alert("Stay Frosty! The Meme Lab is still warming up (API Key not found).");
      return;
    }

    setIsGenerating(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: { parts: [{ text: `A vibrant neo-brutalist meme illustration of $YETI coin world. ${prompt}. Style: Thick black outlines, solid colors, high energy.` }] },
        config: { responseModalities: [Modality.IMAGE] },
      });
      
      const parts = response.candidates?.[0]?.content?.parts;
      const data = parts?.find(p => p.inlineData)?.inlineData?.data;
      
      if (data) {
        const newUrl = `data:image/png;base64,${data}`;
        setCurrentImage(newUrl);
        setRecentMemes(prev => [{
          id: Date.now().toString(),
          url: newUrl,
          prompt: prompt
        }, ...prev].slice(0, 8));
        setPrompt("");
      }
    } catch (err) { 
      console.error("Meme Generation Error:", err); 
    } finally { 
      setIsGenerating(false); 
    }
  };

  return (
    <section id="about" className="py-24 px-4 bg-[#0a2e45] text-white border-b-4 border-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          
          {/* Left: Meme Lab */}
          <div className="relative group">
             <div className="absolute -top-6 left-6 bg-[#4db6ff] border-2 border-black px-4 py-1 rounded-lg font-comic text-xs uppercase z-10 neo-shadow">
               $YETI MEME LAB
             </div>
             <div className="bg-white p-5 border-4 border-black rounded-[2rem] neo-shadow text-black">
               <div className="flex items-center justify-between mb-4 border-b-2 border-black pb-2">
                 <div className="flex gap-1.5">
                   <div className="w-3 h-3 rounded-full bg-red-400 border-2 border-black"></div>
                   <div className="w-3 h-3 rounded-full bg-yellow-400 border-2 border-black"></div>
                   <div className="w-3 h-3 rounded-full bg-green-400 border-2 border-black"></div>
                 </div>
                 <span className="font-comic text-[10px] uppercase text-sky-400">#YETI MEME LAB V6.0</span>
               </div>
               <div className="relative aspect-video rounded-xl overflow-hidden border-4 border-black bg-slate-100 mb-4">
                 <img src={currentImage} className={`w-full h-full object-contain ${isGenerating ? 'blur-sm animate-pulse' : ''}`} alt="Canvas" />
                 {isGenerating && (
                   <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/10 backdrop-blur-sm">
                     <Snowflake className="animate-spin text-black mb-2" size={40} />
                     <span className="font-comic text-xs animate-pulse">FREEZING PIXELS...</span>
                   </div>
                 )}
               </div>
               <div className="space-y-3">
                 <input 
                    value={prompt} 
                    onChange={e => setPrompt(e.target.value)} 
                    onKeyPress={(e) => e.key === 'Enter' && generateMeme()}
                    placeholder="What's $YETI doing? (e.g. Surfing on an avalanche)" 
                    className="w-full p-4 border-2 border-black rounded-xl font-bold bg-slate-50 text-sm outline-none focus:border-[#4db6ff]" 
                 />
                 <button 
                    onClick={generateMeme} 
                    disabled={isGenerating}
                    className="w-full bg-[#4db6ff] text-white border-4 border-black py-4 rounded-xl font-comic text-xl hover:translate-y-1 transition-all neo-shadow active:shadow-none disabled:opacity-50 disabled:translate-y-0 uppercase"
                 >
                   {isGenerating ? 'Cooking...' : 'Generate $YETI Meme'}
                 </button>
               </div>
             </div>
          </div>

          {/* Right: Text Content */}
          <div className="relative">
            <div className="absolute -top-8 right-0 bg-yellow-300 text-black px-6 py-2 border-4 border-black rounded-xl font-comic text-lg rotate-12 neo-shadow z-10">
              VIRAL!
            </div>
            <div className="bg-[#1a3d54] p-10 border-4 border-black rounded-[3rem] neo-shadow">
              <div className="absolute -top-6 left-6 bg-[#4db6ff] border-2 border-black px-4 py-1 rounded-lg font-comic text-xs uppercase z-10 neo-shadow">
                The Abominable Edge
              </div>
              <h2 className="text-5xl md:text-7xl font-comic leading-[0.9] mb-8 uppercase">
                <span className="text-[#4db6ff]">STAY</span> FROZEN <br/> 
                <span className="text-[#4db6ff]">STAY</span> $YETI
              </h2>
              <blockquote className="border-l-4 border-[#4db6ff] pl-6 italic text-slate-300 mb-8 font-bold text-lg leading-relaxed">
                "Born in the Blizzard, Hardened on Solana."
              </blockquote>
              <p className="text-lg font-bold text-slate-200 leading-relaxed mb-8">
                $YETI is more than a coin; it's an unmeltable movement. While other tokens evaporate under market heat, we stay frozen. Our community leverages the Wojak spirit to navigate the treacherous peaks of the Solana chain. From base camp at pump.fun to the absolute summit, we document every sub-zero gain.
              </p>
              <div className="flex gap-4">
                <div className="bg-white p-4 border-4 border-black rounded-2xl flex-1 text-black neo-shadow-sm">
                  <div className="font-comic text-2xl text-sky-400">$YETI</div>
                  <div className="text-[10px] font-black uppercase opacity-60">Native Ticker</div>
                </div>
                <div className="bg-[#b3e5fc] p-4 border-4 border-black rounded-2xl flex-1 text-black neo-shadow-sm">
                  <div className="font-comic text-2xl">ICE</div>
                  <div className="text-[10px] font-black uppercase opacity-60">Locked Liquidity</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Memes Area */}
        <div className="mt-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-[#4db6ff] border-2 border-black px-4 py-1 rounded-lg font-comic text-xs uppercase neo-shadow-sm">
              RECENT GENERATIONS
            </div>
            <div className="flex-1 h-1 bg-black opacity-20 rounded-full"></div>
          </div>

          {recentMemes.length === 0 ? (
            <div className="bg-[#1a3d54] border-4 border-black border-dashed rounded-[2rem] p-12 text-center opacity-50">
              <span className="font-comic text-2xl uppercase">No memes generated yet... Get cooking!</span>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {recentMemes.map((meme) => (
                <div key={meme.id} className="bg-white p-2 border-4 border-black rounded-2xl neo-shadow hover:scale-105 transition-transform">
                  <div className="aspect-square rounded-xl overflow-hidden border-2 border-black bg-slate-100">
                    <img src={meme.url} alt={meme.prompt} className="w-full h-full object-cover" title={meme.prompt} />
                  </div>
                  <div className="mt-2 text-[10px] font-black uppercase text-black truncate px-1">
                    {meme.prompt}
                  </div>
                </div>
              ))}
              {Array.from({ length: Math.max(0, 8 - recentMemes.length) }).map((_, idx) => (
                <div key={`filler-${idx}`} className="bg-[#1a3d54] border-4 border-black border-dashed rounded-2xl aspect-square flex items-center justify-center opacity-30">
                  <Snowflake size={24} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;