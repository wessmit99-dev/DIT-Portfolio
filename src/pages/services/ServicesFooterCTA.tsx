import Button from '@/components/ui/Button';

export interface ServicesFooterCTAProps {
  readonly label: string;
  readonly href: string;
}

export default function ServicesFooterCTA({ label, href }: ServicesFooterCTAProps) {
  return (
    <section
      className="py-24 px-12 text-center"
      style={{ backgroundColor: '#242424' }}
    >
      <Button variant="outline" href={href}>
        {label}
      </Button>
    </section>
  );
}
