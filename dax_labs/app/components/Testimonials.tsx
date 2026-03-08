const testimonials = [
  {
    quote: "DAK Security transformed our approach to cybersecurity. Their proactive monitoring and rapid response capabilities have given us peace of mind and protected our critical infrastructure.",
    author: "Rajesh Kumar",
    role: "CIO",
    company: "TechCorp Industries",
  },
  {
    quote: "The team at DAK Security demonstrated exceptional expertise during our ISO 27001 certification journey. Their guidance was invaluable in achieving compliance.",
    author: "Priya Sharma",
    role: "Head of IT Security",
    company: "Global Finance Ltd",
  },
  {
    quote: "We've partnered with DAK Security for over 5 years. Their dedication to keeping our systems secure and their responsive support team make them an trusted partner.",
    author: "Michael Chen",
    role: "CTO",
    company: "Innovate Solutions",
  },
];

export default function Testimonials() {
  return (
    <section id="clients" className="py-20 lg:py-28 bg-[var(--color-bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] tracking-tight">
            WHAT OUR CLIENT SAY
          </h2>
          <p className="mt-4 text-lg text-[var(--color-text-secondary)] leading-relaxed">
            Don&apos;t just take our word for it. Hear from the organizations we&apos;ve helped secure.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="group p-8 bg-[var(--color-bg-secondary)] rounded-lg border border-[var(--color-border)] hover:border-[var(--color-border-hover)] transition-all duration-300 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="text-[var(--color-text-muted)]">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              
              {/* Quote */}
              <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              
              {/* Author */}
              <div className="mt-6 flex items-center">
                {/* Avatar placeholder */}
                <div className="w-12 h-12 rounded-full bg-[var(--color-bg-tertiary)] flex items-center justify-center text-[var(--color-accent)] font-semibold">
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>
                
                {/* Info */}
                <div className="ml-4">
                  <p className="text-sm font-semibold text-[var(--color-text-primary)]">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
