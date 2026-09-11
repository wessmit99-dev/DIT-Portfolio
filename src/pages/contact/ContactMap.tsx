export interface ContactMapProps {
  readonly address: string;
}

export default function ContactMap({ address }: Readonly<ContactMapProps>) {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

  return (
    <div className="h-full" style={{ backgroundColor: '#1c1c1c', minHeight: '220px' }}>
      <iframe
        title={`Map: ${address}`}
        src={src}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full block"
        style={{ border: 0 }}
      />
    </div>
  );
}
