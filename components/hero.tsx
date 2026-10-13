'use client'

import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { Countdown } from '@/components/countdown'
import { GaneshEmblem } from '@/components/indian-ornaments'
import { BASE_PATH } from '@/lib/base-path'
import { RECEPTION, WEDDING } from '@/lib/wedding'

export function Hero() {
  return (
    <section className="hero-invitation relative flex min-h-[100svh] w-full items-center justify-center bg-[#f8f0dd]">
      <div className="relative w-full min-h-[100svh] aspect-[925/1700] min-[900px]:landscape:aspect-[1672/941]">
        {/* Cover-fill keeps the artwork flush with the top edge on every screen
            size while the overlays stay proportionally aligned to it. */}
        <picture aria-hidden="true" className="absolute inset-0">
          <source
            media="(min-width: 900px) and (orientation: landscape)"
            srcSet={`${BASE_PATH}/indian-wedding-hero-desktop-botanical.jpg`}
          />
          <img
            src={`${BASE_PATH}/indian-wedding-hero-centered.jpg`}
            alt=""
            className="h-full w-full select-none object-cover object-top"
          />
        </picture>
        <div className="absolute left-1/2 top-[16%] z-10 flex w-[42%] -translate-x-1/2 flex-col items-center text-center min-[900px]:landscape:top-[14%]">
        <motion.div
          className="mb-1"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <GaneshEmblem className="h-[18vw] max-h-24 w-[18vw] max-w-24 object-contain min-[900px]:landscape:h-24 min-[900px]:landscape:w-24" />
        </motion.div>
        <motion.p
          lang="hi"
          className="font-serif text-[10px] tracking-[0.14em] text-[#a96949] sm:text-sm"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05 }}
        >
          श्री गणेशाय नमः
        </motion.p>
        </div>

        <div className="absolute left-1/2 top-[47%] z-10 flex w-[62%] max-w-md -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center min-[900px]:landscape:top-[46%] min-[900px]:landscape:w-[44%] min-[900px]:landscape:max-w-2xl">
        <motion.div
          className="flex w-[50vw] max-w-[15rem] flex-col items-center gap-1 sm:w-auto sm:max-w-lg"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <p className="font-serif text-champagne w-full text-balance text-center text-sm font-light uppercase leading-snug tracking-[0.12em] sm:text-base sm:tracking-[0.16em]">
            Together with our families
          </p>
          <p className="font-serif text-champagne max-w-[11rem] text-balance text-center text-[11px] font-light leading-snug tracking-normal sm:max-w-xs sm:text-xs">
            we cordially invite you to our wedding
          </p>
        </motion.div>

        <motion.h1
          className="font-serif mt-1.5 whitespace-nowrap text-[clamp(2rem,8.2vw,2.65rem)] font-bold leading-none text-cream min-[900px]:landscape:mt-2 min-[900px]:landscape:text-[clamp(2.6rem,4.2vw,4.5rem)]"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          {WEDDING.couple[0]}
          <span className="mx-1.5 inline-block text-champagne/90 sm:mx-3">&amp;</span>
          {WEDDING.couple[1]}
        </motion.h1>

        <motion.p
          className="font-serif mt-1 text-sm font-light uppercase tracking-[0.3em] text-cream/75 sm:text-base sm:tracking-[0.35em] min-[900px]:landscape:mt-1.5 min-[900px]:landscape:text-lg"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          {WEDDING.surnames[0]} &amp; {WEDDING.surnames[1]}
        </motion.p>

        <motion.div
          className="mt-4 flex flex-col items-center gap-1.5 text-cream/85 sm:mt-5"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* One grid so the pipes align in a column across both lines */}
          <div className="grid w-full grid-cols-[1fr_auto_1fr] items-center gap-x-2 text-[9px] font-semibold uppercase tracking-[0.08em] sm:text-xs sm:tracking-[0.16em]">
            <span className="text-right">{WEDDING.dateLabel}</span>
            <span className="text-cream/60">|</span>
            <span className="flex items-center justify-start gap-1 text-left">
              <MapPin className="size-2.5 shrink-0 text-champagne sm:size-3" aria-hidden="true" />
              {WEDDING.location}
            </span>
            <span className="text-right">{RECEPTION.dateLabel}</span>
            <span className="text-cream/60">|</span>
            <span className="flex items-center justify-start gap-1 text-left">
              <MapPin className="size-2.5 shrink-0 text-champagne sm:size-3" aria-hidden="true" />
              {RECEPTION.location}
            </span>
          </div>
        </motion.div>

        <motion.div
          className="mt-8 translate-y-3 sm:mt-10 sm:translate-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
        >
          <Countdown target={WEDDING.date} />
        </motion.div>
        </div>
      </div>
    </section>
  )
}
