import { Helmet } from 'react-helmet-async';
import WaterfallBackground from '@/components/WaterfallBackground';
import ProfileCard from '@/components/ProfileCard';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Sadrita Neogi | Portfolio</title>
        <meta name="description" content="Connect with Sadrita Neogi - Developer, Creator, and Explorer. Find me on GitHub, LinkedIn, X, Instagram, and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      
      <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <WaterfallBackground />
        
        <div className="relative z-10">
          <ProfileCard />
        </div>
      </main>
    </>
  );
};

export default Index;
