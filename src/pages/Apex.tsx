import { useState, useMemo, useEffect } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Search, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import apexLogo from '@/assets/apex-magazine-logo.png';

// Word grid abbreviations
const gridWords = [
  'DPC', 'RX', 'MD', 'TPA', 'HRA', 'HSA', 'FSA', 'PPO', 'HMO', 'ACO',
  'EMR', 'EHR', 'PHR', 'PBM', 'MSO', 'IPA', 'VBC', 'CMS', 'NPI', 'CPT',
  'DRG', 'NDC', 'DME', 'SNF', 'LTC', 'PCM', 'CCM', 'RPM', 'CDI', 'HCC'
];

// Data model with category tiles integrated
const apexData = {
  hero: {
    eyebrow: 'A Community initiative by Health Compiler',
    h1: 'Celebrating CHANGE MAKERS in Direct Care, Human Capital, Benefit Advisory and beyond',
  },
  sections: [
    {
      categoryTitle: null,
      profiles: [
        { name: 'Dr. Sabina Singh', linkUrl: '/apex-magazine/dr-sabina-singh', image: 'https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/Image-800w.jpeg' },
        { name: 'Dr. Hertz', linkUrl: '/apex-magazine/dr-hertz-s', image: 'https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/Regenrated-da0cf67e-800w.png' },
        { name: 'Russell DuBose', linkUrl: '/apex-magazine/russell-dubose', image: 'https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/RussellDubose-948x640-800w.jpg' },
        { name: 'Allison De Paoli', linkUrl: '/apex-magazine/allison-de-paoli', image: 'https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/1656768758328-800w.jpeg' },
        { name: 'Dr. Garrison Bliss', linkUrl: '/apex-magazine/dr-garrison-bliss', image: 'https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/Garrison_bliss-800w.jpeg' },
        { name: 'Dr. Brad Brown', linkUrl: '/apex-magazine/dr-brad', image: 'https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/Dr.+Brad+Brown-800w.jpg' },
        { name: 'Dr. Alex Bugg', linkUrl: '/apex-magazine/dr-alex-bugg', image: 'https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/Alex+bugg-800w.png' },
      ]
    },
    {
      categoryTitle: 'REIMAGINE HEALTHCARE',
      categorySubtitle: 'Transforming Care',
      profiles: [
        { name: 'Dr. Diana Girnita', linkUrl: '/apex-magazine/dr-diana-girnita', image: 'https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/channels4_profile-800w.jpg' },
        { name: 'Dr. Sara Pastoor', linkUrl: '/apex-magazine/dr-sara-pastoor', image: 'https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/Sara-J.-Pastoor.jpg-800w.webp' },
        { name: 'Dr. Jeff Panzer', linkUrl: '/apex-magazine/dr.-jeff-panzer', image: 'https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/Jeff+photo+Oct+2021+%283%29-800w.jpg' },
        { name: 'Dr. Tanner Moore', linkUrl: '/apex-magazine/dr-tanner-moore', image: 'https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/Dr.+Tanner+Moore-800w.png' },
        { name: 'Dr. Vasanth Kainkaryam', linkUrl: '/apex-magazine/dr-vk', image: 'https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/Screenshot+2025-01-19+at+4.47.29-PM-800w.png' },
      ]
    },
    {
      categoryTitle: 'COST SAVINGS ELEVATED',
      categorySubtitle: 'Value-Based Solutions',
      profiles: [
        { name: 'Dr. Ben Aiken', linkUrl: '/apex-magazine/dr-ben-aiken', image: 'https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/Dr.+Ben+Aiken-800w.png' },
        { name: 'David Contorno', linkUrl: '/apex-magazine/david-contorno', image: 'https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/David+Contorno+-+Validation+institute-800w.png' },
        { name: 'Bryan Perry', linkUrl: '/apex-magazine/bryan-perry', image: 'https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/Bryan-Perry-800w.jpg' },
      ]
    },
    {
      categoryTitle: 'BENEFITS REDEFINED',
      categorySubtitle: 'New Perspectives',
      profiles: [
        { name: 'Dr. William Burkhart', linkUrl: '/apex-magazine/dr-william-burkhart', image: 'https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/Dr.+William+Burkhart-800w.png' },
        { name: 'Monica McKitterick', linkUrl: '/apex-magazine/monica-mckitterick', image: 'https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/Monica-800w.png' },
        { name: 'Dr. Grace Torres-Hodges', linkUrl: '/apex-magazine/dr-grace', image: 'https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/Headshot-SoMeDocs-GTH-20220903--e1662346848641-800w.jpg' },
      ]
    },
    {
      categoryTitle: 'STRENGTH IN CARE',
      categorySubtitle: 'Patient-First Approach',
      profiles: [
        { name: "Dr. Kristin Strange", linkUrl: '/apex-magazine/dr-kristin-strange-s', image: 'https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/Dr.+Kristin+Strange-800w.jpg' },
        { name: 'Dylan Gray', linkUrl: '/apex-magazine/dylan-gray', image: 'https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/Dylan+Gray-800w.jpeg' },
        { name: 'Andrew Roberts', linkUrl: '/apex-magazine/andrew-roberts', image: 'https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/Andy+Photo+resized-800w.jpg' },
      ]
    },
    {
      categoryTitle: 'ENHANCED ACCESS',
      categorySubtitle: 'Breaking Barriers',
      profiles: [
        { name: 'Dr. Dunbar', linkUrl: '/apex-magazine/dr-dunbar', image: 'https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/dunbar-800w.webp' },
        { name: 'Jessica McCartin', linkUrl: '/apex-magazine/jessica-mccartin', image: 'https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/Jessica-800w.jpg' },
        { name: 'Dakotah Asher', linkUrl: '/apex-magazine/dakotah-asher', image: 'https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/dakotah-800w.png' },
        { name: 'Matt Ohrt', linkUrl: '/apex-magazine/matt-ohrt', image: 'https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/Matt+Ohrt+-800w.png' },
        { name: 'Neer Patel', linkUrl: '/apex-magazine/neer-patel', image: 'https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/Neer+Patel-800w.png' },
        { name: 'Dr. Jeffrey Hockings', linkUrl: '/apex-magazine/dr-jeffrey-hockings', image: 'https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/Dr.+Jeff+Headshot-800w.jpg' },
        { name: 'Dr. Maryal Concepcion', linkUrl: '/apex-magazine/dr-maryal-concepcion', image: 'https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/Maryal+Concepcion-800w.jpg' },
        { name: 'Dr. Raymond Kordonowy', linkUrl: '/apex-magazine/dr-raymond-kordonowy', image: 'https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/Dr.+Raymond+Kordonowy-800w.png' },
      ]
    },
  ],
  finalCta: {
    title: 'TELL YOUR STORY',
    body: "If you are a DPC, DSC, a Self Funded Benefits Advisor, we'd love to feature you on APEX",
    buttonLabel: 'GET FEATURED',
    buttonUrl: '/get-featured-form',
  }
};

// Get all unique categories for filter
const allCategories = apexData.sections
  .map(s => s.categoryTitle)
  .filter((c): c is string => c !== null);

// Word Grid Background Component
const WordGrid = () => (
  <div className="absolute inset-0 overflow-hidden opacity-[0.08]">
    <div className="grid grid-cols-6 md:grid-cols-10 gap-4 p-4 -rotate-12 scale-125 origin-center">
      {[...gridWords, ...gridWords, ...gridWords].map((word, i) => (
        <span 
          key={i} 
          className="font-apex-display text-xl md:text-2xl font-bold text-apex-foreground whitespace-nowrap"
          style={{ opacity: 0.3 + (i % 5) * 0.15 }}
        >
          {word}
        </span>
      ))}
    </div>
  </div>
);

// Flip Category Tile Component
const CategoryTile = ({ title, subtitle }: { title: string; subtitle: string }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped(prev => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="aspect-[4/5] perspective-1000 cursor-pointer group"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div 
        className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden bg-white rounded-xl flex flex-col items-center justify-center p-6 shadow-lg">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-apex-display font-bold text-apex-bg text-center leading-tight tracking-tight">
            {title}
          </h2>
        </div>
        
        {/* Back */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-apex-accent rounded-xl flex flex-col items-center justify-center p-6 shadow-lg">
          <span className="text-lg md:text-xl font-apex-body font-semibold text-apex-bg text-center">
            {subtitle}
          </span>
          <div className="mt-4 w-12 h-0.5 bg-apex-bg/50 rounded-full" />
        </div>
      </div>
    </div>
  );
};

// Profile Card Component
const ProfileCard = ({ name, linkUrl, image, index }: { name: string; linkUrl: string; image: string; index: number }) => {
  const initials = name.split(' ').map(n => n[0]).join('').slice(0, 2);
  
  return (
    <Link 
      to={linkUrl}
      className="group relative overflow-hidden rounded-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.3)] animate-fade-in block"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Profile Image */}
      <div className="aspect-[4/5] bg-gray-100 relative overflow-hidden">
        {image ? (
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg">
              <span className="text-2xl font-apex-display font-bold text-apex-bg">{initials}</span>
            </div>
          </div>
        )}
        
        {/* Name overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-4 pt-12">
          <h3 className="font-apex-body font-medium text-white text-sm md:text-base">
            {name}
          </h3>
        </div>
      </div>
    </Link>
  );
};

// Build unified grid items with category tiles integrated
type GridItem = 
  | { type: 'profile'; name: string; linkUrl: string; image: string }
  | { type: 'category'; title: string; subtitle: string };

const buildGridItems = (sections: typeof apexData.sections): GridItem[] => {
  const items: GridItem[] = [];
  
  sections.forEach((section, sectionIndex) => {
    // Add category tile at the start of each section (except first)
    if (section.categoryTitle) {
      items.push({
        type: 'category',
        title: section.categoryTitle,
        subtitle: section.categorySubtitle || ''
      });
    }
    
    // Add profiles
    section.profiles.forEach(profile => {
      items.push({
        type: 'profile',
        ...profile
      });
    });
  });
  
  return items;
};

const Apex = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const { ref: heroRef } = useScrollReveal();

  // Filter sections based on search and category
  const filteredSections = useMemo(() => {
    return apexData.sections.map(section => ({
      ...section,
      profiles: section.profiles.filter(profile => {
        const matchesSearch = profile.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = !activeCategory || section.categoryTitle === activeCategory;
        return matchesSearch && matchesCategory;
      })
    })).filter(section => section.profiles.length > 0 || (section.categoryTitle && !searchQuery));
  }, [searchQuery, activeCategory]);

  // Build grid items
  const gridItems = useMemo(() => buildGridItems(filteredSections), [filteredSections]);

  return (
    <Layout>
      {/* Custom styles for 3D flip */}
      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>

      {/* APEX Page Wrapper with light/white theme for grid section */}
      <div className="apex-page min-h-screen font-lato">
        {/* Hero Section - Dark */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-apex-bg">
          {/* Word Grid Background */}
          <WordGrid />
          
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-apex-bg via-transparent to-apex-bg pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-apex-bg to-transparent pointer-events-none" />

          <div ref={heroRef} className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col items-center text-center">
              {/* APEX Logo */}
              <div className="mb-8 animate-fade-in">
                <img 
                  src={apexLogo} 
                  alt="APEX Magazine" 
                  className="h-20 md:h-28 w-auto brightness-0 invert"
                />
              </div>
              
              {/* Eyebrow */}
              <p className="text-apex-accent font-apex-body text-sm md:text-base tracking-widest uppercase mb-6 animate-fade-in" style={{ animationDelay: '100ms' }}>
                {apexData.hero.eyebrow}
              </p>
              
              {/* Headline */}
              <h1 className="font-apex-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-apex-foreground leading-tight max-w-5xl animate-fade-in" style={{ animationDelay: '200ms' }}>
                {apexData.hero.h1}
              </h1>
              
              {/* Decorative line */}
              <div className="mt-12 w-24 h-1 bg-gradient-to-r from-apex-accent to-apex-accent-warm rounded-full animate-fade-in" style={{ animationDelay: '300ms' }} />
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-6 bg-white border-b border-gray-200 sticky top-[72px] z-40 backdrop-blur-xl">
          <div className="container mx-auto px-6">
            <div className="flex justify-center">
              {/* Search */}
              <div className="relative w-full max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search changemakers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-full border border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-apex-accent/50 focus:border-apex-accent/50 transition-all duration-300 font-apex-body"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Profiles Grid - Light Background */}
        <section className="py-8 md:py-12 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
              {gridItems.map((item, index) => (
                item.type === 'category' ? (
                  <CategoryTile 
                    key={`cat-${item.title}`} 
                    title={item.title} 
                    subtitle={item.subtitle}
                  />
                ) : (
                  <ProfileCard 
                    key={item.name} 
                    name={item.name}
                    linkUrl={item.linkUrl}
                    image={item.image}
                    index={index}
                  />
                )
              ))}
            </div>

            {/* No results */}
            {gridItems.length === 0 && (
              <div className="text-center py-20">
                <p className="text-gray-500 text-lg font-apex-body">No profiles found matching your criteria.</p>
                <Button 
                  variant="outline" 
                  className="mt-4 border-gray-300 text-gray-700 hover:bg-gray-100"
                  onClick={() => { setSearchQuery(''); setActiveCategory(null); }}
                >
                  Clear filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section - Dark */}
        <section className="py-20 md:py-28 relative overflow-hidden bg-apex-bg">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <WordGrid />
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center bg-apex-bg-secondary rounded-3xl p-10 md:p-16 border border-apex-border/50 shadow-[0_0_60px_-20px_rgba(245,158,11,0.2)]">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-apex-display font-bold text-apex-accent mb-6 tracking-wide">
                {apexData.finalCta.title}
              </h2>
              <p className="text-lg text-apex-foreground/80 mb-10 font-apex-body leading-relaxed">
                {apexData.finalCta.body}
              </p>
              <Button 
                size="lg" 
                className="bg-apex-accent hover:bg-apex-accent-warm text-apex-bg font-apex-body font-semibold px-10 py-6 text-lg transition-all duration-300 hover:shadow-[0_10px_40px_-10px_rgba(245,158,11,0.5)]"
                asChild
              >
                <Link to={apexData.finalCta.buttonUrl} className="gap-3">
                  {apexData.finalCta.buttonLabel}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Apex;
