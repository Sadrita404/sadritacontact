import { useMemo } from 'react';

const WaterfallBackground = () => {
  const drops = useMemo(() => {
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4,
      size: 2 + Math.random() * 3,
      opacity: 0.1 + Math.random() * 0.4,
    }));
  }, []);

  const particles = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 3,
    }));
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
      
      {/* Water drops */}
      {drops.map((drop) => (
        <div
          key={drop.id}
          className="absolute animate-fall"
          style={{
            left: `${drop.left}%`,
            width: `${drop.size}px`,
            height: `${drop.size * 8}px`,
            background: `linear-gradient(180deg, transparent, hsl(185 70% 50% / ${drop.opacity}), transparent)`,
            borderRadius: '50%',
            animationDuration: `${drop.duration}s`,
            animationDelay: `${drop.delay}s`,
            filter: 'blur(1px)',
          }}
        />
      ))}
      
      {/* Floating particles */}
      {particles.map((particle) => (
        <div
          key={`particle-${particle.id}`}
          className="absolute w-1 h-1 rounded-full animate-shimmer"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            background: 'hsl(185 70% 60%)',
            boxShadow: '0 0 10px hsl(185 70% 50% / 0.5)',
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
      
      {/* Bottom mist effect */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-40"
        style={{
          background: 'linear-gradient(to top, hsl(200 40% 15% / 0.8), transparent)',
        }}
      />
    </div>
  );
};

export default WaterfallBackground;
