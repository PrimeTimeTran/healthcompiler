import { useState, useMemo } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Search, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

// Data model
const apexData = {
  hero: {
    eyebrow: 'A Community initiative by Health Compiler',
    h1: 'Celebrating CHANGE MAKERS in Direct Care, Human Capital, Benefit Advisory and beyond',
    logo: '/apex-logo.png',
  },
  sections: [
    {
      categoryTitle: null,
      profiles: [
        { name: 'Dr. Sabina Singh', linkUrl: '/apex-magazine/dr-sabina-singh' },
        { name: 'Dr. Hertz', linkUrl: '/apex-magazine/dr-hertz-s' },
        { name: 'Russell DuBose', linkUrl: '/apex-magazine/russell-dubose' },
        { name: 'Allison De Paoli', linkUrl: '/apex-magazine/allison-de-paoli' },
        { name: 'Dr. Garrison Bliss', linkUrl: '/apex-magazine/dr-garrison-bliss' },
        { name: 'Dr. Brad Brown', linkUrl: '/apex-magazine/dr-brad' },
        { name: 'Dr. Alex Bugg', linkUrl: '/apex-magazine/dr-alex-bugg' },
      ]
    },
    {
      categoryTitle: 'REIMAGINE HEALTHCARE',
      profiles: [
        { name: 'Dr. Diana Girnita', linkUrl: '/apex-magazine/dr-diana-girnita' },
        { name: 'Dr. Sara Pastoor', linkUrl: '/apex-magazine/dr-sara-pastoor' },
        { name: 'Dr. Jeff Panzer', linkUrl: '/apex-magazine/dr.-jeff-panzer' },
        { name: 'Dr. Tanner Moore', linkUrl: '/apex-magazine/dr-tanner-moore' },
        { name: 'Dr. Vasanth Kainkaryam', linkUrl: '/apex-magazine/dr-vk' },
      ]
    },
    {
      categoryTitle: 'COST SAVINGS ELEVATED',
      profiles: [
        { name: 'Dr. Ben Aiken', linkUrl: '/apex-magazine/dr-ben-aiken' },
        { name: 'David Contorno', linkUrl: '/apex-magazine/david-contorno' },
        { name: 'Bryan Perry', linkUrl: '/apex-magazine/bryan-perry' },
      ]
    },
    {
      categoryTitle: 'BENEFITS REDEFINED',
      profiles: [
        { name: 'Dr. William Burkhart', linkUrl: '/apex-magazine/dr-william-burkhart' },
        { name: 'Monica McKitterick', linkUrl: '/apex-magazine/monica-mckitterick' },
        { name: 'Dr. Grace Torres-Hodges', linkUrl: '/apex-magazine/dr-grace' },
      ]
    },
    {
      categoryTitle: 'STRENGTH IN CARE',
      profiles: [
        { name: "Dr. Kristin Strange", linkUrl: '/apex-magazine/dr-kristin-strange-s' },
        { name: 'Dylan Gray', linkUrl: '/apex-magazine/dylan-gray' },
        { name: 'Andrew Roberts', linkUrl: '/apex-magazine/andrew-roberts' },
      ]
    },
    {
      categoryTitle: 'ENHANCED ACCESS',
      profiles: [
        { name: 'Dr. Dunbar', linkUrl: '/apex-magazine/dr-dunbar' },
        { name: 'Jessica McCartin', linkUrl: '/apex-magazine/jessica-mccartin' },
        { name: 'Dakotah Asher', linkUrl: '/apex-magazine/dakotah-asher' },
        { name: 'Matt Ohrt', linkUrl: '/apex-magazine/matt-ohrt' },
        { name: 'Neer Patel', linkUrl: '/apex-magazine/neer-patel' },
        { name: 'Dr. Jeffrey Hockings', linkUrl: '/apex-magazine/dr-jeffrey-hockings' },
        { name: 'Dr. Maryal Concepcion', linkUrl: '/apex-magazine/dr-maryal-concepcion' },
        { name: 'Dr. Raymond Kordonowy', linkUrl: '/apex-magazine/dr-raymond-kordonowy' },
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

// Profile Card Component
const ProfileCard = ({ name, linkUrl, index }: { name: string; linkUrl: string; index: number }) => {
  const initials = name.split(' ').map(n => n[0]).join('').slice(0, 2);
  
  return (
    <div 
      className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] animate-fade-in"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Image placeholder with gradient */}
      <div className="aspect-[4/5] bg-gradient-to-br from-secondary via-muted to-primary/20 flex items-center justify-center relative overflow-hidden">
        <div className="w-24 h-24 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center shadow-lg">
          <span className="text-2xl font-bold text-gradient">{initials}</span>
        </div>
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div className="w-full">
            <h3 className="text-lg font-semibold text-background mb-3">{name}</h3>
            <Button variant="gradient" size="sm" className="w-full" asChild>
              <Link to={linkUrl}>
                Read Story
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Card footer */}
      <div className="p-4">
        <h3 className="font-semibold text-foreground text-center group-hover:text-gradient transition-colors">
          {name}
        </h3>
      </div>
    </div>
  );
};

// Category Header Component
const CategoryHeader = ({ title }: { title: string }) => {
  const { ref } = useScrollReveal();
  
  return (
    <div ref={ref} className="scroll-reveal col-span-full py-12">
      <div className="flex items-center gap-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
        <h2 className="text-2xl md:text-3xl font-bold text-gradient tracking-wide">
          {title}
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
    </div>
  );
};

const Apex = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const { ref: heroRef } = useScrollReveal();

  // Filter profiles based on search and category
  const filteredSections = useMemo(() => {
    return apexData.sections.map(section => ({
      ...section,
      profiles: section.profiles.filter(profile => {
        const matchesSearch = profile.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = !activeCategory || section.categoryTitle === activeCategory;
        return matchesSearch && matchesCategory;
      })
    })).filter(section => section.profiles.length > 0);
  }, [searchQuery, activeCategory]);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-background to-background-secondary relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div ref={heroRef} className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center scroll-reveal">
            {/* APEX Logo/Title */}
            <div className="mb-8">
              <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
                <span className="text-gradient">APEX</span>
              </h1>
              <p className="text-lg text-muted-foreground italic mt-2">magazine</p>
            </div>
            
            {/* Eyebrow */}
            <p className="text-sm uppercase tracking-widest text-accent mb-6">
              {apexData.hero.eyebrow}
            </p>
            
            {/* Main headline */}
            <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
              {apexData.hero.h1}
            </h2>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-background-secondary border-y border-border/30 sticky top-[72px] z-40 backdrop-blur-lg bg-background-secondary/95">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search by name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
              />
            </div>

            {/* Category filters */}
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => setActiveCategory(null)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  !activeCategory 
                    ? 'bg-accent text-accent-foreground' 
                    : 'bg-secondary text-muted-foreground hover:text-foreground'
                }`}
              >
                All
              </button>
              {allCategories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category 
                      ? 'bg-accent text-accent-foreground' 
                      : 'bg-secondary text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Profiles Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          {filteredSections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              {/* Category Header */}
              {section.categoryTitle && (
                <CategoryHeader title={section.categoryTitle} />
              )}
              
              {/* Profiles Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {section.profiles.map((profile, index) => (
                  <ProfileCard 
                    key={profile.name} 
                    {...profile} 
                    index={index}
                  />
                ))}
              </div>
            </div>
          ))}

          {/* No results */}
          {filteredSections.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">No profiles found matching your criteria.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => { setSearchQuery(''); setActiveCategory(null); }}
              >
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-background-secondary to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center bg-card rounded-3xl p-10 md:p-16 shadow-card border border-border/50">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6">
              {apexData.finalCta.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {apexData.finalCta.body}
            </p>
            <Button variant="gradient" size="xl" asChild>
              <Link to={apexData.finalCta.buttonUrl} className="gap-2">
                {apexData.finalCta.buttonLabel}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Apex;
