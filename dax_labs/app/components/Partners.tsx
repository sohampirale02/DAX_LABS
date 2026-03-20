const partners = [
  {
    name: 'Haltdos',
    specialization: 'Web Application Security, DDoS Protection',
    products: 'WAF, DDoS Mitigation, API Security',
  },
  {
    name: 'Port Swigger',
    specialization: 'Web Security Testing',
    products: 'Burp Suite Professional/Enterprise',
  },
  {
    name: 'Tenable',
    specialization: 'Vulnerability Management',
    products: 'Nessus, Tenable.io, Tenable.sc',
  },
  {
    name: 'Manage Engine',
    specialization: 'IT Management Solutions',
    products: 'Security Manager, Log Analyzer, AD Manager',
  },
  {
    name: 'Motadata',
    specialization: 'IT Operations Management',
    products: 'ServiceOps, Network Monitoring, SIEM',
  },
  {
    name: 'Zoho',
    specialization: 'Business Software Suite',
    products: 'Zoho Vault, Zoho Mail, Zoho One',
  },
  {
    name: 'Maltego',
    specialization: 'Threat Intelligence',
    products: 'OSINT, Link Analysis, Investigation',
  },
  {
    name: 'Rapid7',
    specialization: 'Security Analytics',
    products: 'InsightVM, InsightIDR, Metasploit',
  },
  {
    name: 'Checkpoint',
    specialization: 'Network Security',
    products: 'Firewalls, Threat Prevention, Cloud Security',
  },
  {
    name: 'Titania',
    specialization: 'Network Security',
    products: 'NAC (Network Access Control)',
  },
  {
    name: 'Velox',
    specialization: 'Security Solutions',
    products: 'Network Security, Threat Intelligence',
  },
  {
    name: 'Everest',
    specialization: 'Security Solutions',
    products: 'Network Security, Endpoint Protection',
  },
];

export default function Partners() {
  return (
    <section className="py-20 lg:py-28 bg-[var(--color-bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] tracking-tight">
            OUR PARTNERS
          </h2>
          <p className="mt-4 text-lg text-[var(--color-text-secondary)] leading-relaxed">
            We partner with leading cybersecurity vendors to deliver best-in-class security solutions tailored to your requirements.
          </p>
        </div>

        {/* Partnership Benefits */}
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          <div className="px-4 py-2 bg-[var(--color-bg-primary)] rounded-full text-sm font-medium text-[var(--color-text-secondary)] border border-[var(--color-border)]">
            ✓ Authorized Reseller
          </div>
          <div className="px-4 py-2 bg-[var(--color-bg-primary)] rounded-full text-sm font-medium text-[var(--color-text-secondary)] border border-[var(--color-border)]">
            ✓ Certified Technical Team
          </div>
          <div className="px-4 py-2 bg-[var(--color-bg-primary)] rounded-full text-sm font-medium text-[var(--color-text-secondary)] border border-[var(--color-border)]">
            ✓ Direct Vendor Support
          </div>
          <div className="px-4 py-2 bg-[var(--color-bg-primary)] rounded-full text-sm font-medium text-[var(--color-text-secondary)] border border-[var(--color-border)]">
            ✓ Competitive Pricing
          </div>
          <div className="px-4 py-2 bg-[var(--color-bg-primary)] rounded-full text-sm font-medium text-[var(--color-text-secondary)] border border-[var(--color-border)]">
            ✓ Training & Certification
          </div>
        </div>

        {/* Partners Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="group p-6 bg-[var(--color-bg-primary)] rounded-lg border border-[var(--color-border)] hover:border-[var(--color-border-hover)] transition-all duration-300 hover-lift"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Partner Name */}
              <h3 className="text-xl font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                {partner.name}
              </h3>

              {/* Specialization */}
              <div className="mt-3">
                <p className="text-sm font-semibold text-[var(--color-text-secondary)]">
                  Specialization
                </p>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                  {partner.specialization}
                </p>
              </div>

              {/* Key Products */}
              <div className="mt-3 pt-3 border-t border-[var(--color-border)]">
                <p className="text-sm font-semibold text-[var(--color-text-secondary)]">
                  Key Products
                </p>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                  {partner.products}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
