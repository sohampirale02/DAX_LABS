export default function Hero() {
  return (
    <section className="relative pt-16 lg:pt-20 min-h-screen flex items-center overflow-hidden">
      {/* Subtle gradient background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(135deg, var(--color-bg-gradient-start) 0%, var(--color-bg-gradient-end) 100%)`,
        }}
      />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-[var(--color-bg-tertiary)] rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[var(--color-bg-tertiary)] rounded-full blur-3xl opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-4xl">
          {/* Headline */}
          <h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-text-primary)] leading-tight tracking-tight animate-fade-in-up"
            style={{ animationDelay: '0.1s' }}
          >
            EMPOWERING YOUR DIGITAL FUTURE WITH ADVANCED CYBERSECURITY SOLUTIONS
          </h1>
          
          {/* Tagline */}
          <p 
            className="mt-6 text-lg sm:text-xl text-[var(--color-text-secondary)] max-w-3xl leading-relaxed animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            Your trusted partner in Cyber Security Services and Solutions, building a safer, more progressive environment for mankind.
          </p>
          
          {/* CTA Buttons */}
          <div 
            className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-up"
            style={{ animationDelay: '0.3s' }}
          >
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[var(--color-text-light)] bg-[var(--color-accent)] rounded-md hover:bg-[var(--color-accent-hover)] transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg group"
            >
              Discover Our Solutions
              <svg 
                className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[var(--color-text-primary)] bg-transparent border-2 border-[var(--color-accent)] rounded-md hover:bg-[var(--color-accent)] hover:text-[var(--color-text-light)] transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          className="w-6 h-6 text-[var(--color-text-muted)]" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
