import { siteData } from '@/data/mockData';
import Button from '@/components/ui/Button';
import ProjectsHero from './ProjectsHero';
import ProjectList from './ProjectList';
import TechnicalStandards from './TechnicalStandards';

export default function ProjectsPage() {
  const { heroHeadline, heroSubheadline, projects, technicalStandards, footerCtaPortfolioLabel, footerCtaContactLabel, footerCtaPortfolioHref, footerCtaContactHref } = siteData.projects;

  return (
    <>
      <ProjectsHero headline={heroHeadline} subheadline={heroSubheadline} />
      <ProjectList projects={projects} />
      <TechnicalStandards standards={technicalStandards} />

      {/* Footer CTA */}
      <section
        className="py-24 px-12 text-center"
        style={{ backgroundColor: '#131313' }}
      >
        <p
          className="text-2xl font-bold mb-8"
          style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#f5f5f5' }}
        >
          Collaborate on your next vision.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button variant="outline" href={footerCtaPortfolioHref}>
            {footerCtaPortfolioLabel}
          </Button>
          <Button variant="primary" href={footerCtaContactHref}>
            {footerCtaContactLabel}
          </Button>
        </div>
      </section>
    </>
  );
}
