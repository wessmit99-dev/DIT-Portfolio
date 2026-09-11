import { siteData } from '@/data/mockData';
import ContactHero from './ContactHero';
import AgentCard from './AgentCard';
import ContactMap from './ContactMap';

export default function ContactPage() {
  const { heroEyebrow, heroHeadline, heroSubheadline, email, phone, agents, mapAddress } = siteData.contact;

  return (
    <>
      <ContactHero
        eyebrow={heroEyebrow}
        headline={heroHeadline}
        subheadline={heroSubheadline}
        email={email}
        phone={phone}
      />

      {/* Representation */}
      <section style={{ backgroundColor: '#131313' }}>
        <div className="mx-auto px-4 sm:px-12 pb-12 sm:pb-24" style={{ maxWidth: '1920px' }}>
          <p
            className="text-sm uppercase tracking-[0.3em] mb-8 font-semibold"
            style={{ color: '#f5f5f5' }}
          >
            REPRESENTATION
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {agents.map((agent, i) => (
              <AgentCard key={i} agent={agent} />
            ))}
            <ContactMap address={mapAddress} />
          </div>
        </div>
      </section>
    </>
  );
}
