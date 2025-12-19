import { ReactNode } from 'react';

interface SocialLinkProps {
  href: string;
  icon: ReactNode;
  label: string;
  isEmail?: boolean;
}

const SocialLink = ({ href, icon, label, isEmail }: SocialLinkProps) => {
  const finalHref = isEmail ? `mailto:${href}` : href;
  
  return (
    <a
      href={finalHref}
      target={isEmail ? undefined : "_blank"}
      rel={isEmail ? undefined : "noopener noreferrer"}
      className="social-icon group"
      aria-label={label}
    >
      {icon}
      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        {label}
      </span>
    </a>
  );
};

export default SocialLink;
