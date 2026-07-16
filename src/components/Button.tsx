import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  href?: string;
}

export function Button({ variant = 'primary', href, className = '', children, ...props }: ButtonProps) {
  let baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 whitespace-nowrap";
  
  if (variant === 'primary') {
    baseStyles += " bg-[#051A24] text-white rounded-full px-7 py-3";
    baseStyles += " shadow-[0_1px_2px_0_rgba(5,26,36,0.1),_0_4px_4px_0_rgba(5,26,36,0.09),_0_9px_6px_0_rgba(5,26,36,0.05),_0_17px_7px_0_rgba(5,26,36,0.01),_0_26px_7px_0_rgba(5,26,36,0),_inset_0_2px_8px_0_rgba(255,255,255,0.5)]";
    baseStyles += " hover:opacity-90";
  } else if (variant === 'secondary') {
    baseStyles += " bg-white text-[#051A24] rounded-full px-7 py-3";
    baseStyles += " shadow-[0_0_0_0.5px_rgba(0,0,0,0.05),_0_4px_30px_rgba(0,0,0,0.08)]";
    baseStyles += " hover:bg-gray-50";
  } else if (variant === 'tertiary') {
    // Tertiary variant mentioned in the spec: white bg with combined shadow
    baseStyles += " bg-white text-[#051A24] rounded-full px-7 py-3";
    baseStyles += " shadow-[0_0_0_0.5px_rgba(0,0,0,0.05),_0_4px_30px_rgba(0,0,0,0.08)]";
    baseStyles += " hover:bg-gray-50";
  }

  const combinedClasses = `${baseStyles} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
