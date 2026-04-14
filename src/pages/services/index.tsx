import { siteData } from '@/data/mockData';
import ServiceItem from './ServiceItem';

export default function ServicesPage() {
  const { headline, services } = siteData.services;

  return (
    <>
      {/* Page header */}
      <div
        className="px-4 sm:px-12 pt-28 sm:pt-40 pb-12 sm:pb-16"
        style={{ backgroundColor: '#131313', maxWidth: '1920px', margin: '0 auto' }}
      >
        <h1
          className="font-bold tracking-tight"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            color: '#f5f5f5',
          }}
        >
          {headline}
        </h1>
      </div>

      {/* Service items */}
      {services.map((service, index) => (
        <ServiceItem key={service.id} data={service} isEven={index % 2 === 1} />
      ))}

    </>
  );
}
