import { siteData } from '@/data/mockData';
import Hero from './Hero';
import ToolsGrid from './ToolsGrid';

export default function HomePage() {
  const { hero, toolsGrid } = siteData.home;

  return (
    <>
      <Hero data={hero} />
      <ToolsGrid data={toolsGrid} />
    </>
  );
}
