import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  alignment?: 'left' | 'center' | 'right';
  accentColor?: 'teal' | 'orange' | 'purple';
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  alignment = 'center',
  accentColor = 'teal'
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto'
  };

  const accentColorClasses = {
    teal: 'bg-teal-600',
    orange: 'bg-orange-500',
    purple: 'bg-purple-700'
  };

  return (
    <div className={`mb-16 ${alignmentClasses[alignment]}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{title}</h2>
      <div className={`w-20 h-1 ${accentColorClasses[accentColor]} ${alignment === 'center' ? 'mx-auto' : ''} mb-6`}></div>
      <p className="text-lg text-gray-600 max-w-2xl">{subtitle}</p>
    </div>
  );
};

export default SectionHeading;