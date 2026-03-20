export default function ProductsCTA() {
  return (
    <section className="py-20 lg:py-28 bg-[var(--color-bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Card */}
        <div className="relative bg-[var(--color-bg-secondary)] rounded-2xl border border-[var(--color-border)] overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-bg-tertiary)] rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--color-bg-tertiary)] rounded-full blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2" />

          <div className="relative z-10 px-6 py-16 lg:px-12 lg:py-20">
            <div className="max-w-3xl mx-auto text-center">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--color-accent)] rounded-full text-[var(--color-text-light)]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>

              {/* Heading */}
              <h2 className="mt-8 text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] tracking-tight">
                Ready to Enhance Your Security Posture?
              </h2>

              {/* Description */}
              <p className="mt-4 text-lg text-[var(--color-text-secondary)] leading-relaxed">
                Contact our product specialists to discuss your requirements and get a customized security solution recommendation.
              </p>

              {/* CTA Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/#contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[var(--color-text-light)] bg-[var(--color-accent)] rounded-md hover:bg-[var(--color-accent-hover)] transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg"
                >
                  Request Product Demo
                </a>
                <a
                  href="/#contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[var(--color-text-primary)] bg-transparent border-2 border-[var(--color-accent)] rounded-md hover:bg-[var(--color-accent)] hover:text-[var(--color-text-light)] transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg"
                >
                  Get a Quote
                </a>
                <a
                  href="/#contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[var(--color-text-primary)] bg-transparent border-2 border-[var(--color-accent)] rounded-md hover:bg-[var(--color-accent)] hover:text-[var(--color-text-light)] transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg"
                >
                  Talk to Sales
                </a>
              </div>

              {/* Contact Information */}
              <div className="mt-12 pt-8 border-t border-[var(--color-border)]">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-[var(--color-text-secondary)]">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-[var(--color-text-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:+911204545911" className="hover:text-[var(--color-accent)] transition-colors">
                      +91-120-454-5911
                    </a>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-[var(--color-text-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:18001202394" className="hover:text-[var(--color-accent)] transition-colors">
                      Toll-Free: 1800-120-2394
                    </a>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-[var(--color-text-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:contact@daksecurity.com" className="hover:text-[var(--color-accent)] transition-colors">
                      contact@daksecurity.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
