import { siteData } from '@/data/mockData';
import ContactHero from './ContactHero';
import AgentCard from './AgentCard';
import GearPartnerRow from './GearPartnerRow';

export default function ContactPage() {
  const { heroEyebrow, heroHeadline, heroSubheadline, email, phone, agents, gearPartner } = siteData.contact;

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
        <div className="mx-auto px-12 pb-16" style={{ maxWidth: '1920px' }}>
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
          </div>
        </div>
      </section>

      {/* Gear Partner */}
      <section style={{ backgroundColor: '#131313' }}>
        <div className="mx-auto px-12 pb-24" style={{ maxWidth: '1920px' }}>
          <p
            className="text-sm uppercase tracking-[0.3em] mb-8 font-semibold"
            style={{ color: '#f5f5f5' }}
          >
            GEAR PARTNER
          </p>
          <GearPartnerRow partner={gearPartner} />
        </div>
      </section>
    </>
  );
}
