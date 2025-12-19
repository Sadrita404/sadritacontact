import { Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="fixed top-6 right-6 z-50 group"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="relative w-16 h-8 rounded-full bg-secondary/80 backdrop-blur-sm border border-border/50 transition-all duration-500 hover:border-primary/50 shadow-lg">
        {/* Track glow */}
        <div 
          className={`absolute inset-0 rounded-full transition-opacity duration-500 ${
            isDark ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            background: 'linear-gradient(90deg, transparent, hsl(185 70% 50% / 0.1), transparent)',
          }}
        />
        
        {/* Sliding knob */}
        <div
          className={`absolute top-1 w-6 h-6 rounded-full transition-all duration-500 ease-out flex items-center justify-center ${
            isDark 
              ? 'left-1 bg-gradient-to-br from-slate-700 to-slate-900 shadow-[0_0_15px_hsl(185_70%_50%/0.4)]' 
              : 'left-8 bg-gradient-to-br from-amber-300 to-orange-400 shadow-[0_0_20px_hsl(45_90%_55%/0.6)]'
          }`}
        >
          {isDark ? (
            <Moon className="w-3.5 h-3.5 text-primary" />
          ) : (
            <Sun className="w-3.5 h-3.5 text-amber-900" />
          )}
        </div>

        {/* Stars decoration for dark mode */}
        <div className={`absolute left-2 top-1/2 -translate-y-1/2 transition-opacity duration-300 ${isDark ? 'opacity-0' : 'opacity-100'}`}>
          <div className="flex gap-0.5">
            <span className="w-1 h-1 rounded-full bg-amber-200" />
            <span className="w-0.5 h-0.5 rounded-full bg-amber-300 mt-0.5" />
          </div>
        </div>
        
        {/* Cloud decoration for light mode */}
        <div className={`absolute right-2 top-1/2 -translate-y-1/2 transition-opacity duration-300 ${isDark ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex gap-0.5">
            <span className="w-1 h-1 rounded-full bg-primary/60" />
            <span className="w-0.5 h-0.5 rounded-full bg-primary/40 mt-0.5" />
          </div>
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;
