import { motion, useReducedMotion } from 'framer-motion';
import Button from '@/components/ui/Button';
import type { HeroData } from '@/types';
import { assetUrl } from '@/lib/assets';

export interface HeroProps {
  readonly data: HeroData;
}

export default function Hero({ data }: HeroProps) {
  const prefersReducedMotion = useReducedMotion();

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
    }),
  };

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: '100vh' }}
    >
      {/* Background image */}
      <motion.img
        src={assetUrl(data.backgroundImageUrl)}
        alt={data.backgroundImageAlt}
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: prefersReducedMotion ? 1 : 1 }}
        animate={{ scale: prefersReducedMotion ? 1 : 1.08 }}
        transition={{ duration: 15, ease: 'easeOut' }}
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.3) 100%)' }}
      />

      {/* Content */}
      <div
        className="relative z-10 flex flex-col justify-center px-4 sm:px-12 mx-auto h-full"
        style={{ maxWidth: '1920px', paddingTop: '72px', minHeight: '100vh' }}
      >
        <motion.span
          className="text-xs uppercase tracking-[0.3em] font-medium mb-6"
          style={{ color: '#00e5ff' }}
          custom={0}
          initial="hidden"
          animate="visible"
          variants={itemVariants}
        >
          {data.eyebrow}
        </motion.span>

        <motion.h1
          className="font-extrabold leading-none tracking-tighter mb-8 max-w-4xl"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(3rem, 6vw, 5.5rem)',
            color: '#ffffff',
          }}
          custom={0.1}
          initial="hidden"
          animate="visible"
          variants={itemVariants}
        >
          {data.headline}
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg leading-relaxed max-w-2xl mb-12"
          style={{ color: 'rgba(255,255,255,0.75)' }}
          custom={0.2}
          initial="hidden"
          animate="visible"
          variants={itemVariants}
        >
          {data.body}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          custom={0.3}
          initial="hidden"
          animate="visible"
          variants={itemVariants}
        >
          <Button variant="primary" href={data.primaryCtaHref}>
            {data.primaryCtaLabel}
          </Button>
          <Button variant="ghost" href={data.secondaryCtaHref}>
            {data.secondaryCtaLabel}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
