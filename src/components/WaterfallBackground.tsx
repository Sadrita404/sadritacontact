import { useMemo } from 'react';

const WaterfallBackground = () => {
  // Water streams - main falling water
  const streams = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: 10 + i * 12,
      width: 3 + Math.random() * 4,
      delay: Math.random() * 2,
      duration: 2.5 + Math.random() * 1.5,
      opacity: 0.15 + Math.random() * 0.2,
    }));
  }, []);

  // Water droplets - smaller particles
  const drops = useMemo(() => {
    return Array.from({ length: 60 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 6,
      duration: 2 + Math.random() * 3,
      size: 1 + Math.random() * 3,
      opacity: 0.2 + Math.random() * 0.5,
      sway: Math.random() * 30 - 15,
    }));
  }, []);

  // Mist particles - floating ambient
  const mist = useMemo(() => {
    return Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: 60 + Math.random() * 40,
      delay: Math.random() * 4,
      size: 50 + Math.random() * 100,
    }));
  }, []);

  // Ripples at the bottom
  const ripples = useMemo(() => {
    return Array.from({ length: 6 }, (_, i) => ({
      id: i,
      left: 15 + i * 14,
      delay: i * 0.5,
    }));
  }, []);

  // Sparkles - light reflections
  const sparkles = useMemo(() => {
    return Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 2 + Math.random() * 2,
    }));
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
      
      {/* Ambient glow at top */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[40%]"
        style={{
          background: 'radial-gradient(ellipse at center top, hsl(var(--primary) / 0.08) 0%, transparent 70%)',
        }}
      />

      {/* Main water streams */}
      {streams.map((stream) => (
        <div
          key={`stream-${stream.id}`}
          className="absolute top-0 h-full animate-stream"
          style={{
            left: `${stream.left}%`,
            width: `${stream.width}px`,
            background: `linear-gradient(180deg, 
              transparent 0%, 
              hsl(var(--primary) / ${stream.opacity}) 10%,
              hsl(var(--primary) / ${stream.opacity * 1.5}) 50%,
              hsl(var(--primary) / ${stream.opacity}) 90%,
              transparent 100%
            )`,
            animationDuration: `${stream.duration}s`,
            animationDelay: `${stream.delay}s`,
            filter: 'blur(2px)',
          }}
        />
      ))}
      
      {/* Water drops */}
      {drops.map((drop) => (
        <div
          key={`drop-${drop.id}`}
          className="absolute animate-drop"
          style={{
            left: `${drop.left}%`,
            width: `${drop.size}px`,
            height: `${drop.size * 6}px`,
            background: `linear-gradient(180deg, 
              transparent, 
              hsl(var(--primary) / ${drop.opacity}),
              hsl(var(--primary) / ${drop.opacity * 0.5}),
              transparent
            )`,
            borderRadius: '50%',
            animationDuration: `${drop.duration}s`,
            animationDelay: `${drop.delay}s`,
            '--sway': `${drop.sway}px`,
            filter: 'blur(0.5px)',
          } as React.CSSProperties}
        />
      ))}

      {/* Mist effect at bottom */}
      {mist.map((m) => (
        <div
          key={`mist-${m.id}`}
          className="absolute rounded-full animate-mist"
          style={{
            left: `${m.left}%`,
            top: `${m.top}%`,
            width: `${m.size}px`,
            height: `${m.size * 0.5}px`,
            background: 'radial-gradient(ellipse at center, hsl(var(--primary) / 0.06), transparent)',
            animationDelay: `${m.delay}s`,
            filter: 'blur(20px)',
          }}
        />
      ))}

      {/* Ripples at bottom */}
      {ripples.map((ripple) => (
        <div
          key={`ripple-${ripple.id}`}
          className="absolute bottom-20 animate-ripple-spread"
          style={{
            left: `${ripple.left}%`,
            width: '60px',
            height: '20px',
            border: '1px solid hsl(var(--primary) / 0.2)',
            borderRadius: '50%',
            animationDelay: `${ripple.delay}s`,
          }}
        />
      ))}

      {/* Sparkles / Light reflections */}
      {sparkles.map((sparkle) => (
        <div
          key={`sparkle-${sparkle.id}`}
          className="absolute w-1 h-1 rounded-full animate-sparkle"
          style={{
            left: `${sparkle.left}%`,
            top: `${sparkle.top}%`,
            background: 'hsl(var(--primary))',
            boxShadow: '0 0 6px hsl(var(--primary) / 0.8), 0 0 12px hsl(var(--primary) / 0.4)',
            animationDuration: `${sparkle.duration}s`,
            animationDelay: `${sparkle.delay}s`,
          }}
        />
      ))}

      {/* Bottom water pool glow */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: 'linear-gradient(to top, hsl(var(--primary) / 0.1), transparent)',
        }}
      />
      
      {/* Bottom mist layer */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-48"
        style={{
          background: 'linear-gradient(to top, hsl(var(--background) / 0.95), transparent)',
        }}
      />
    </div>
  );
};

export default WaterfallBackground;
