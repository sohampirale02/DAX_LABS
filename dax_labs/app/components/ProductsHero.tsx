export default function ProductsHero() {
  return (
    <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 bg-[var(--color-bg-secondary)] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-[var(--color-bg-tertiary)] rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[var(--color-bg-tertiary)] rounded-full blur-3xl opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center text-sm text-[var(--color-text-muted)] mb-8">
          <a href="/" className="hover:text-[var(--color-accent)] transition-colors">
            Home
          </a>
          <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-[var(--color-text-secondary)]">Products</span>
        </nav>

        {/* Header Content */}
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-text-primary)] tracking-tight animate-fade-in-up">
            OUR PRODUCTS
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[var(--color-text-secondary)] max-w-3xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Comprehensive Security Products and Solutions for Your Digital Protection. Enterprise-grade security products, forensic tools, and partner solutions tailored to your requirements.
          </p>
        </div>
      </div>
    </section>
  );
}
