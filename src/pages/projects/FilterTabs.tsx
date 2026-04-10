import type { FilterTab } from '@/types';

export interface FilterTabsProps {
  readonly tabs: readonly FilterTab[];
  readonly activeTab: string;
  readonly onTabChange: (id: string) => void;
}

export default function FilterTabs({ tabs, activeTab, onTabChange }: FilterTabsProps) {
  return (
    <div
      className="px-12 pb-12"
      style={{ backgroundColor: '#131313', maxWidth: '1920px', margin: '0 auto' }}
    >
      <div className="flex items-center gap-8">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className="text-xs uppercase tracking-widest pb-2 transition-all cursor-pointer"
              style={{
                color:        isActive ? '#f5f5f5' : '#a0a0a0',
                background:   'none',
                border:       'none',
                borderBottom: isActive ? '2px solid #00e5ff' : '2px solid transparent',
                fontFamily:  "'Space Grotesk', sans-serif",
                fontWeight:  isActive ? '600' : '400',
                cursor:      'pointer',
                padding:     '0 0 8px 0',
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
