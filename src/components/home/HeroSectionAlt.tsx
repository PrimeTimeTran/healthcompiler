import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';

// Floating data particles
const dataTypes = [
  { label: 'Claims', color: '#E94E87' },
  { label: 'EHR', color: '#F97316' },
  { label: 'Labs', color: '#8B5CF6' },
  { label: 'Rx', color: '#06B6D4' },
  { label: 'SDoH', color: '#10B981' },
  { label: 'Vitals', color: '#F59E0B' },
];

const FloatingParticle = ({ index, total }: { index: number; total: number }) => {
  const angle = (index / total) * Math.PI * 2;
  const radius = 180 + Math.random() * 60;
  const duration = 20 + Math.random() * 10;
  const delay = index * 0.5;
  const size = 4 + Math.random() * 4;

  return (
    <div
      className="absolute rounded-full bg-gradient-to-r from-accent to-primary opacity-40"
      style={{
        width: size,
        height: size,
        left: '50%',
        top: '50%',
        animation: `orbit ${duration}s linear infinite`,
        animationDelay: `-${delay}s`,
        transformOrigin: '0 0',
        '--orbit-radius': `${radius}px`,
        '--start-angle': `${angle}rad`,
      } as React.CSSProperties}
    />
  );
};

export const HeroSectionAlt = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeWord, setActiveWord] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const words = ['Activate', 'Unify', 'Transform'];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left - rect.width / 2) / 50,
        y: (e.clientY - rect.top - rect.height / 2) / 50,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-[#0a0a0f]"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-[#1a0a1f] via-[#0a0a0f] to-[#0f1a1a] opacity-80"
          style={{
            transform: `translate(${mousePos.x * 2}px, ${mousePos.y * 2}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
        {/* Radial glow */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(233,78,135,0.15) 0%, rgba(249,115,22,0.08) 40%, transparent 70%)',
            transform: `translate(${mousePos.x * -3}px, ${mousePos.y * -3}px)`,
            transition: 'transform 0.5s ease-out',
          }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* CSS for animations */}
      <style>{`
        @keyframes orbit {
          from {
            transform: rotate(var(--start-angle)) translateX(var(--orbit-radius)) rotate(calc(-1 * var(--start-angle)));
          }
          to {
            transform: rotate(calc(var(--start-angle) + 360deg)) translateX(var(--orbit-radius)) rotate(calc(-1 * var(--start-angle) - 360deg));
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        
        @keyframes glow {
          0%, 100% { filter: brightness(1) drop-shadow(0 0 20px rgba(233,78,135,0.5)); }
          50% { filter: brightness(1.2) drop-shadow(0 0 40px rgba(233,78,135,0.8)); }
        }
        
        @keyframes text-reveal {
          0% { clip-path: inset(0 100% 0 0); }
          100% { clip-path: inset(0 0 0 0); }
        }
        
        @keyframes data-flow {
          0% { transform: translateY(100%) scale(0); opacity: 0; }
          20% { transform: translateY(50%) scale(1); opacity: 1; }
          80% { transform: translateY(-50%) scale(1); opacity: 1; }
          100% { transform: translateY(-100%) scale(0); opacity: 0; }
        }
        
        .word-animate {
          animation: text-reveal 0.8s cubic-bezier(0.77, 0, 0.175, 1) forwards;
        }
      `}</style>

      <div className="container mx-auto px-6 relative z-10 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full py-20">
          {/* Left - Content */}
          <div className="space-y-8">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#E94E87] animate-pulse" />
              <span className="text-sm text-white/70 tracking-wide">Healthcare Data Platform</span>
            </div>

            {/* Main headline */}
            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.05]">
                <span className="block opacity-90">
                  {words.map((word, idx) => (
                    <span
                      key={word}
                      className={`inline-block transition-all duration-700 ${
                        idx === activeWord
                          ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#E94E87] to-[#F97316] scale-105'
                          : 'text-white/20 scale-100 hidden'
                      }`}
                    >
                      {idx === activeWord && word}
                    </span>
                  ))}
                </span>
                <span className="block mt-2">Healthcare Data.</span>
                <span className="block text-white/50 mt-1">Drive Outcomes.</span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-xl">
              Unifying healthcare data and AI-driven workflows to lower costs and improve care across 
              <span className="text-white/80"> self-funded</span>,
              <span className="text-white/80"> direct care</span>, and
              <span className="text-white/80"> value-based</span> organizations.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-[#E94E87] to-[#F97316] hover:from-[#d63d76] hover:to-[#e86505] text-white font-semibold px-8 py-6 text-base shadow-2xl shadow-[#E94E87]/30 hover:shadow-[#E94E87]/50 transition-all duration-300 hover:scale-105"
                asChild
              >
                <Link to="/contact">
                  Request Demo
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-base backdrop-blur-sm group"
                asChild
              >
                <Link to="/capabilities">
                  <Play className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                  See How It Works
                </Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 pt-6 border-t border-white/10">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">10M+</div>
                <div className="text-xs text-white/50 uppercase tracking-wider">Lives Managed</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="text-center">
                <div className="text-2xl font-bold text-white">$2B+</div>
                <div className="text-xs text-white/50 uppercase tracking-wider">Claims Processed</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="text-center">
                <div className="text-2xl font-bold text-white">99.9%</div>
                <div className="text-xs text-white/50 uppercase tracking-wider">Uptime</div>
              </div>
            </div>
          </div>

          {/* Right - Visualization */}
          <div className="relative h-[600px] flex items-center justify-center">
            {/* Floating particles */}
            {Array.from({ length: 30 }).map((_, i) => (
              <FloatingParticle key={i} index={i} total={30} />
            ))}

            {/* Main orb */}
            <div 
              className="relative"
              style={{
                transform: `translate(${mousePos.x * -5}px, ${mousePos.y * -5}px)`,
                transition: 'transform 0.3s ease-out',
              }}
            >
              {/* Outer glow rings */}
              <div className="absolute inset-0 -m-20">
                <div 
                  className="absolute inset-0 rounded-full border border-[#E94E87]/20"
                  style={{ animation: 'pulse-ring 3s ease-out infinite' }}
                />
                <div 
                  className="absolute inset-0 rounded-full border border-[#F97316]/20"
                  style={{ animation: 'pulse-ring 3s ease-out infinite 1s' }}
                />
                <div 
                  className="absolute inset-0 rounded-full border border-[#E94E87]/20"
                  style={{ animation: 'pulse-ring 3s ease-out infinite 2s' }}
                />
              </div>

              {/* Central orb */}
              <div 
                className="relative w-64 h-64 rounded-full"
                style={{ animation: 'glow 4s ease-in-out infinite' }}
              >
                {/* Glass sphere effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#E94E87]/30 via-transparent to-[#F97316]/30 backdrop-blur-sm" />
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/10 via-transparent to-transparent" />
                <div className="absolute inset-4 rounded-full bg-[#0a0a0f]/80 border border-white/10 flex items-center justify-center overflow-hidden">
                  {/* Inner content */}
                  <div className="text-center">
                    <div className="text-sm text-white/50 uppercase tracking-widest mb-2">Powered by</div>
                    <div className="text-2xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E94E87] to-[#F97316]">
                      Infera AI
                    </div>
                  </div>
                  
                  {/* Animated data streams inside orb */}
                  <div className="absolute inset-0 overflow-hidden opacity-30">
                    {[0, 1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="absolute w-px h-full bg-gradient-to-b from-transparent via-[#E94E87] to-transparent"
                        style={{
                          left: `${20 + i * 20}%`,
                          animation: `data-flow ${2 + i * 0.5}s linear infinite`,
                          animationDelay: `${i * 0.3}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Orbiting data labels */}
                {dataTypes.map((data, idx) => {
                  const angle = (idx / dataTypes.length) * Math.PI * 2 - Math.PI / 2;
                  const radius = 160;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;

                  return (
                    <div
                      key={data.label}
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                      style={{
                        transform: `translate(${x}px, ${y}px)`,
                        animation: `float ${4 + idx * 0.5}s ease-in-out infinite`,
                        animationDelay: `${idx * 0.3}s`,
                      }}
                    >
                      <div 
                        className="px-3 py-1.5 rounded-full text-xs font-medium text-white border backdrop-blur-md"
                        style={{
                          backgroundColor: `${data.color}20`,
                          borderColor: `${data.color}40`,
                          boxShadow: `0 0 20px ${data.color}30`,
                        }}
                      >
                        {data.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Connection lines to edges */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#E94E87" stopOpacity="0" />
                  <stop offset="50%" stopColor="#E94E87" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#F97316" stopOpacity="0" />
                </linearGradient>
              </defs>
              {[45, 135, 225, 315].map((angle, i) => {
                const rad = (angle * Math.PI) / 180;
                const x1 = 50 + Math.cos(rad) * 15;
                const y1 = 50 + Math.sin(rad) * 15;
                const x2 = 50 + Math.cos(rad) * 50;
                const y2 = 50 + Math.sin(rad) * 50;
                return (
                  <line
                    key={i}
                    x1={`${x1}%`}
                    y1={`${y1}%`}
                    x2={`${x2}%`}
                    y2={`${y2}%`}
                    stroke="url(#lineGrad)"
                    strokeWidth="1"
                  />
                );
              })}
            </svg>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
      </div>
    </section>
  );
};
