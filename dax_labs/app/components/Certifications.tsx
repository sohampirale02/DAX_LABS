const certifications = [
  { name: 'CERT-In Empanelled', description: 'Certified by Indian Computer Emergency Response Team' },
  { name: 'ISO 27001', description: 'Information Security Management Certified' },
  { name: 'ISO 9001', description: 'Quality Management Certified' },
  { name: 'CMMI Level 3', description: 'Capability Maturity Model Integration' },
  { name: 'GDPR Compliant', description: 'Data Protection Regulation Compliant' },
  { name: 'SOC 2 Type II', description: 'Service Organization Control Certified' },
];

export default function Certifications() {
  return (
    <section className="py-20 lg:py-28 bg-[var(--color-bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] tracking-tight">
            TRUST AND CERTIFICATIONS
          </h2>
          <p className="mt-4 text-lg text-[var(--color-text-secondary)] leading-relaxed">
            Industry-recognized certifications that validate our commitment to excellence and security.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {certifications.map((cert, index) => (
            <div
              key={cert.name}
              className="group flex flex-col items-center justify-center p-6 bg-[var(--color-bg-primary)] rounded-lg border border-[var(--color-border)] hover:border-[var(--color-border-hover)] transition-all duration-300 hover-lift"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Badge Icon */}
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-bg-tertiary)] text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-text-light)] transition-colors duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              
              {/* Name */}
              <h3 className="mt-4 text-sm font-semibold text-[var(--color-text-primary)] text-center">
                {cert.name}
              </h3>
              
              {/* Description */}
              <p className="mt-2 text-xs text-[var(--color-text-muted)] text-center">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
