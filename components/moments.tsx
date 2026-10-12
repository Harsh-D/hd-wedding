'use client'

import { motion } from 'framer-motion'
import { MOMENTS, type Moment } from '@/lib/wedding'
import { Reveal, SectionHeading } from '@/components/reveal'

export function Moments({ moments = MOMENTS }: { moments?: Moment[] }) {
  return (
    <section id="moments" className="wedding-section section-rose relative px-2.5 py-10 sm:px-6 sm:py-20">
      <div className="invitation-page-panel mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="The Moments"
          title="A love, in frames"
          className="mx-auto max-w-xl text-center sm:mx-0 sm:text-left"
        />
        <Reveal delay={0.12}>
          <p className="mx-auto mt-5 max-w-md text-pretty text-center text-sm leading-relaxed text-cream/60 sm:mx-0 sm:text-left">
            Little glimpses of us.
          </p>
        </Reveal>

        {/* Masonry layout: every photo keeps its natural aspect ratio — no cropping */}
        <div className="mt-10 columns-2 gap-2.5 sm:mt-14 sm:gap-4 lg:columns-3">
          {moments.map((m, i) => (
            <Reveal
              key={m.src}
              delay={(i % 3) * 0.08}
              className="mb-2.5 break-inside-avoid sm:mb-4"
            >
              <div className="group relative overflow-hidden rounded-[2rem] border border-[#a96949]/20 bg-[#efe5d2] p-1 shadow-[0_18px_45px_rgba(95,68,50,0.12)]">
                <motion.img
                  src={m.src}
                  alt={m.alt}
                  loading="lazy"
                  className="h-auto w-full rounded-[1.7rem]"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                />
                {/* Live-photo style shimmer + vignette on hover */}
                <div className="pointer-events-none absolute inset-1 rounded-[1.7rem] bg-gradient-to-t from-[#26301f]/65 via-transparent to-transparent opacity-65 transition-opacity duration-500 group-hover:opacity-85" />
                <motion.div
                  className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-champagne/0 group-hover:ring-champagne/30"
                  aria-hidden="true"
                />
                <div className="absolute left-4 top-4 flex items-center gap-1.5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-champagne/70" />
                    <span className="relative inline-flex size-2 rounded-full bg-champagne" />
                  </span>
                  <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/85">
                    Live
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
