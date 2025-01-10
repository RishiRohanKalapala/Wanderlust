import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
}

export function Section({ children, className = '', title, description }: SectionProps) {
  return (
    <section className={`py-16 ${className}`}>
      {(title || description) && (
        <div className="text-center mb-12">
          {title && <h2 className="text-3xl font-bold mb-4">{title}</h2>}
          {description && <p className="text-xl text-gray-600 dark:text-gray-400">{description}</p>}
        </div>
      )}
      {children}
    </section>
  );
}