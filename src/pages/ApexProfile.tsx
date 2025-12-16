import { useParams, Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { getProfileBySlug } from '@/data/apexProfiles';
import apexLogo from '@/assets/apex-magazine-logo.png';

const ApexProfile = () => {
  const { slug } = useParams<{ slug: string }>();
  const profile = slug ? getProfileBySlug(slug) : undefined;

  if (!profile) {
    return (
      <Layout>
        <div className="min-h-screen bg-apex-bg flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-apex-foreground mb-4">Profile Not Found</h1>
            <Link to="/resources/apex">
              <Button variant="outline" className="border-apex-accent text-apex-accent hover:bg-apex-accent hover:text-apex-bg">
                Back to APEX
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-apex-bg pt-32 pb-16 relative overflow-hidden">
          <div className="container mx-auto px-6">
            {/* Breadcrumb */}
            <Link to="/resources/apex" className="inline-flex items-center gap-2 text-apex-accent hover:text-apex-accent-warm transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Back to APEX</span>
            </Link>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="relative">
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                />
              </div>

              {/* Content */}
              <div>
                <img src={apexLogo} alt="APEX Magazine" className="h-12 mb-6 brightness-0 invert opacity-50" />
                <h2 className="text-apex-accent font-medium text-lg mb-2">{profile.name}</h2>
                {profile.subtitle && (
                  <p className="text-apex-foreground/70 text-xl mb-4">{profile.subtitle}</p>
                )}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-apex-foreground leading-tight">
                  {profile.title}
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6 max-w-4xl">
            {/* Intro */}
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-12 border-l-4 border-apex-accent pl-6">
              {profile.intro}
            </p>

            {/* Sections */}
            {profile.sections.map((section, index) => (
              <div key={index} className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">{section.heading}</h2>
                {section.content.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-gray-700 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}

            {/* CTA */}
            <div className="mt-16 p-8 bg-gray-50 rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Interested to share your story?</h3>
              <p className="text-gray-600 mb-6">Contact us today & let us know!</p>
              <Link to="/get-featured-form">
                <Button className="bg-apex-accent hover:bg-apex-accent-warm text-white">
                  Get Featured
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ApexProfile;
