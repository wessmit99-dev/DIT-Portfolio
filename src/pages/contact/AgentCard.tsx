import type { AgentData } from '@/types';

export interface AgentCardProps {
  readonly agent: AgentData;
}

export default function AgentCard({ agent }: Readonly<AgentCardProps>) {
  const initials = agent.agency
    ? agent.agency.split(' ').map((w) => w[0]).join('').slice(0, 3).toUpperCase()
    : '?';

  return (
    <div
      className="p-6 sm:p-10 flex flex-col gap-6"
      style={{ backgroundColor: '#1c1c1c' }}
    >
      {/* Logo */}
      <div
        className="flex items-center"
        style={{ height: '80px' }}
      >
        {agent.logoUrl ? (
          <img
            src={agent.logoUrl}
            alt={agent.agency}
            style={{ maxHeight: '80px', maxWidth: '180px', objectFit: 'contain' }}
          />
        ) : (
          <div
            className="flex items-center justify-center text-sm font-bold tracking-widest"
            style={{
              width: '80px',
              height: '80px',
              backgroundColor: '#2a2a2a',
              color: '#555555',
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            {initials}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex flex-col gap-3">
        {agent.name && (
          <p
            className="font-bold"
            style={{ color: '#f5f5f5', fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.5rem' }}
          >
            {agent.name}
          </p>
        )}

        {agent.agency && (
          <p
            className="text-xs uppercase tracking-[0.2em]"
            style={{ color: '#00e5ff' }}
          >
            {agent.agency}
          </p>
        )}

        {agent.territory && (
          <p
            className="text-xs uppercase tracking-widest"
            style={{ color: '#666666' }}
          >
            {agent.territory}
          </p>
        )}
      </div>

      {/* Contact links */}
      {(agent.email || agent.secondEmail || agent.phone) && (
        <div className="flex flex-col gap-2 mt-auto">
          {agent.email && (
            <a
              href={`mailto:${agent.email}`}
              className="text-sm"
              style={{ color: '#a0a0a0', textDecoration: 'none' }}
            >
              {agent.email}
            </a>
          )}
          {agent.secondEmail && (
            <a
              href={`mailto:${agent.secondEmail}`}
              className="text-sm"
              style={{ color: '#a0a0a0', textDecoration: 'none' }}
            >
              {agent.secondEmail}
            </a>
          )}
          {agent.phone && (
            <a
              href={`tel:${agent.phone}`}
              className="text-sm"
              style={{ color: '#a0a0a0', textDecoration: 'none' }}
            >
              {agent.phone}
            </a>
          )}
          {agent.website && (
            <a
              href={agent.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-[0.2em]"
              style={{ color: '#00e5ff', textDecoration: 'none' }}
            >
              {agent.website.replace(/^https?:\/\//, '')}
            </a>
          )}
        </div>
      )}
    </div>
  );
}
