'use client';

import { useEffect, useState } from 'react';

const stats = [
  { value: 17, suffix: ' Years', label: 'Years of Excellence' },
  { value: 14000, suffix: '+', label: 'Applications Secured' },
  { value: 4000, suffix: '+', label: 'Clients Trusted' },
  { value: 200, suffix: '+', label: 'Security Professionals' },
];

export default function Statistics() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('statistics-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="statistics-section" className="py-20 lg:py-28 bg-[var(--color-bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] tracking-tight">
            OUR COMPETITIVE EDGE
          </h2>
          <p className="mt-4 text-lg text-[var(--color-text-secondary)] leading-relaxed">
            Proven track record of delivering exceptional security outcomes for organizations worldwide.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Animated Counter */}
              <div className="relative">
                <span 
                  className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-accent)] transition-all duration-700 ${
                    isVisible ? 'animate-counter opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ animationDelay: `${index * 0.15}s`, animationFillMode: 'forwards' }}
                >
                  {isVisible && stat.value}
                </span>
                <span 
                  className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-accent)] transition-all duration-700 ${
                    isVisible ? 'animate-counter opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ animationDelay: `${index * 0.15 + 0.1}s`, animationFillMode: 'forwards' }}
                >
                  {stat.suffix}
                </span>
              </div>
              
              {/* Label */}
              <p 
                className={`mt-4 text-sm sm:text-base text-[var(--color-text-secondary)] font-medium transition-all duration-700 ${
                  isVisible ? 'animate-counter opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ animationDelay: `${index * 0.15 + 0.2}s`, animationFillMode: 'forwards' }}
              >
                {stat.label}
              </p>
              
              {/* Decorative underline */}
              <div 
                className={`mt-4 h-0.5 w-12 mx-auto bg-[var(--color-border)] group-hover:bg-[var(--color-accent)] group-hover:w-16 transition-all duration-300 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.15 + 0.3}s`, animationFillMode: 'forwards' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
