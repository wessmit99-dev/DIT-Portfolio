import { siteData } from '@/data/mockData';
import SectionLabel from '@/components/ui/SectionLabel';
import ServiceItem from './ServiceItem';
import ServicesFooterCTA from './ServicesFooterCTA';

export default function ServicesPage() {
  const { eyebrow, headline, services, footerCtaLabel, footerCtaHref } = siteData.services;

  return (
    <>
      {/* Page header */}
      <div
        className="px-12 pt-40 pb-16"
        style={{ backgroundColor: '#131313', maxWidth: '1920px', margin: '0 auto' }}
      >
        <SectionLabel label={eyebrow} />
        <h1
          className="text-5xl font-bold tracking-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#f5f5f5' }}
        >
          {headline}
        </h1>
      </div>

      {/* Service items */}
      {services.map((service, index) => (
        <ServiceItem key={service.id} data={service} isEven={index % 2 === 1} />
      ))}

      <ServicesFooterCTA label={footerCtaLabel} href={footerCtaHref} />
    </>
  );
}
