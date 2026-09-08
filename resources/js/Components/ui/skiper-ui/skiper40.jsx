import React from 'react';
import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';

export function Skiper40({ href, children, className, active, as = 'link', variant = 'light', ...props }) {
  const baseClasses = "relative inline-flex items-center justify-center font-medium transition-colors duration-300 group";
  const textClasses = variant === 'dark'
    ? (active ? "text-teal font-bold" : "text-[#0F3445] hover:text-teal")
    : (active ? "text-teal font-semibold" : "text-white/80 hover:text-white");
  
  const underlineClasses = cn(
    "absolute left-0 bottom-[-4px] w-full h-[2px] bg-teal origin-left transition-transform duration-500 ease-[var(--ease)]",
    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
  );

  const combinedClasses = cn(baseClasses, textClasses, className);

  if (as === 'button') {
    return (
      <button className={combinedClasses} {...props}>
        {children}
        <span className={underlineClasses} />
      </button>
    );
  }

  // Handle external links vs Inertia links
  if (href?.startsWith('http') || href?.startsWith('mailto')) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        {children}
        <span className={underlineClasses} />
      </a>
    );
  }

  return (
    <Link href={href || '#'} className={combinedClasses} {...props}>
      {children}
      <span className={underlineClasses} />
    </Link>
  );
}
