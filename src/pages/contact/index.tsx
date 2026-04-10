import { siteData } from '@/data/mockData';
import ContactHero from './ContactHero';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

export default function ContactPage() {
  const { heroEyebrow, heroHeadline, heroSubheadline, formLabels, projectTypes, infoPanel, coordinates } = siteData.contact;

  return (
    <>
      <ContactHero
        eyebrow={heroEyebrow}
        headline={heroHeadline}
        subheadline={heroSubheadline}
      />

      {/* Form + Info panel */}
      <section style={{ backgroundColor: '#131313' }}>
        <div
          className="mx-auto px-12 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-0"
          style={{ maxWidth: '1920px' }}
        >
          {/* Form */}
          <div className="lg:col-span-7 pr-0 lg:pr-16 py-12">
            <ContactForm labels={formLabels} projectTypes={projectTypes} />
          </div>

          {/* Info panel */}
          <div className="lg:col-span-5">
            <ContactInfo items={infoPanel} coordinates={coordinates} />
          </div>
        </div>
      </section>
    </>
  );
}
