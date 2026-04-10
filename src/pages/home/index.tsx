import { siteData } from '@/data/mockData';
import Hero from './Hero';
import SpecsStrip from './SpecsStrip';
import ServicesTeaser from './ServicesTeaser';
import FeaturedProjects from './FeaturedProjects';

export default function HomePage() {
  const { hero, specsStrip, servicesTeaser, featuredProjects } = siteData.home;

  return (
    <>
      <Hero data={hero} />
      <SpecsStrip data={specsStrip} />
      <ServicesTeaser data={servicesTeaser} />
      <FeaturedProjects data={featuredProjects} />
    </>
  );
}
