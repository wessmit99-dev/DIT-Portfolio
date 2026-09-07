import { siteData } from '@/data/mockData';
import Hero from './Hero';
import AboutMe from './AboutMe';
import ToolsGrid from './ToolsGrid';

export default function HomePage() {
  const { hero, aboutMe, toolsGrid } = siteData.home;

  return (
    <>
      <Hero data={hero} />
      <AboutMe data={aboutMe} />
      <ToolsGrid data={toolsGrid} />
    </>
  );
}
