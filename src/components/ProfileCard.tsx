import { Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';
import SocialLink from './SocialLink';
import profileImage from '@/assets/profile.jpeg';

const ProfileCard = () => {
  const socialLinks = [
    {
      href: 'https://github.com/Sadrita404',
      icon: <Github />,
      label: 'GitHub',
    },
    {
      href: 'https://linkedin.com/in/sadrita-neogi-2a7540376',
      icon: <Linkedin />,
      label: 'LinkedIn',
    },
    {
      href: 'https://x.com/Sadrita404',
      icon: <Twitter />,
      label: 'X',
    },
    {
      href: 'https://www.instagram.com/sadrita_neogi/',
      icon: <Instagram />,
      label: 'Instagram',
    },
    {
      href: 'sadritaneogi@gmail.com',
      icon: <Mail />,
      label: 'Email',
      isEmail: true,
    },
  ];

  return (
    <div className="glass-card rounded-3xl p-8 md:p-12 max-w-md w-full mx-4 animate-[scale-in_0.6s_ease-out_forwards]">
      {/* Profile Image */}
      <div className="relative mx-auto w-32 h-32 md:w-40 md:h-40 mb-6 animate-float">
        {/* Animated ring */}
        <div className="absolute -inset-2 rounded-full border border-primary/30 animate-pulse-glow" />
        <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 animate-ripple" />
        
        <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/50 glow-primary">
          <img
            src={profileImage}
            alt="Sadrita Neogi"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Name */}
      <h1 className="text-2xl md:text-3xl font-semibold text-center text-foreground mb-2">
        Sadrita Neogi
      </h1>
      
      {/* Tagline */}
      <p className="text-muted-foreground text-center mb-8 text-sm md:text-base">
        Developer • Creator • Explorer
      </p>

      {/* Social Links */}
      <div className="flex justify-center items-center gap-4 md:gap-6 flex-wrap">
        {socialLinks.map((link, index) => (
          <div
            key={link.label}
            className="animate-[fade-in_0.5s_ease-out_forwards]"
            style={{ animationDelay: `${0.1 + index * 0.1}s`, opacity: 0 }}
          >
            <SocialLink
              href={link.href}
              icon={link.icon}
              label={link.label}
              isEmail={link.isEmail}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;
