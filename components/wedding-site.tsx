import { Hero } from '@/components/hero'
import { Moments } from '@/components/moments'
import { Schedule } from '@/components/schedule'
import { Rsvp } from '@/components/rsvp'
import { MusicPlayer } from '@/components/music-player'
import { PetalFall } from '@/components/petal-fall'
import { MapPin } from 'lucide-react'
import { RECEPTION, WEDDING, type Moment } from '@/lib/wedding'

export function WeddingSite({ moments }: { moments: Moment[] }) {
  return (
    <main className="relative overflow-x-hidden bg-[#f7f0e2]">
      <PetalFall />
      <Hero />
      <Moments moments={moments} />
      <Schedule />
      <Rsvp />

      <footer className="border-t border-[#a96949]/20 bg-[#efe3ce]/75 px-6 pb-28 pt-14 text-center sm:pb-14">
        <p lang="hi" className="font-serif mb-8 text-lg tracking-[0.22em] text-champagne/75">
          ॥ शुभ विवाह ॥
        </p>
        <div className="mx-auto grid max-w-2xl grid-cols-[1fr_auto_1fr] items-start gap-3">
          <div>
            <p className="font-serif text-4xl font-light text-champagne">{WEDDING.couple[0]}</p>
            <p className="font-serif mt-1 text-lg font-light tracking-[0.25em] text-champagne/70">
              {WEDDING.surnames[0]}
            </p>
            <p className="mt-2 text-xs leading-relaxed text-cream/70">
              <span className="block">Son of</span>
              <span className="block">Suryakant Deshpande</span>
              <span className="block">Vishakha Deshpande</span>
            </p>
          </div>
          <span className="font-serif pt-1 text-4xl font-light text-champagne/90">&amp;</span>
          <div>
            <p className="font-serif text-4xl font-light text-champagne">{WEDDING.couple[1]}</p>
            <p className="font-serif mt-1 text-lg font-light tracking-[0.25em] text-champagne/70">
              {WEDDING.surnames[1]}
            </p>
            <p className="mt-2 text-xs leading-relaxed text-cream/70">
              <span className="block">Daughter of</span>
              <span className="block">Srinivasarao Mallavarapu</span>
              <span className="block">Syamala Mallavarapu</span>
            </p>
          </div>
        </div>
        {/* One grid so the pipes align in a column across both lines */}
        <div className="mx-auto mt-4 grid w-fit grid-cols-[1fr_auto_1fr] items-center gap-x-2 text-xs uppercase tracking-[0.3em] text-cream/50">
          <span className="text-right">{WEDDING.dateLabel}</span>
          <span>|</span>
          <span className="flex items-center justify-start gap-1 text-left">
            <MapPin className="size-3 shrink-0 text-champagne" aria-hidden="true" />
            {WEDDING.location}
          </span>
          <span className="text-right">{RECEPTION.dateLabel}</span>
          <span>|</span>
          <span className="flex items-center justify-start gap-1 text-left">
            <MapPin className="size-3 shrink-0 text-champagne" aria-hidden="true" />
            {RECEPTION.location}
          </span>
        </div>
        <p className="mt-6 text-xs text-cream/30">
          Made with love, for the ones we love.
        </p>
      </footer>

      <MusicPlayer />
    </main>
  )
}
