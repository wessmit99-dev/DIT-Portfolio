import { useState, useMemo } from 'react';
import type { ProjectDetail } from '@/types';

export interface UseProjectFilterResult {
  readonly activeTab: string;
  readonly setActiveTab: (id: string) => void;
  readonly filtered: readonly ProjectDetail[];
}

export function useProjectFilter(
  projects: readonly ProjectDetail[],
  initialTab = 'all',
): UseProjectFilterResult {
  const [activeTab, setActiveTab] = useState(initialTab);

  const filtered = useMemo(() => {
    if (activeTab === 'all') return projects;
    return projects.filter(
      (p) => p.category.toLowerCase() === activeTab.toLowerCase(),
    );
  }, [projects, activeTab]);

  return { activeTab, setActiveTab, filtered };
}
