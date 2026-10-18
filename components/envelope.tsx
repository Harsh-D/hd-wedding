'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { MailOpen } from 'lucide-react'
import { useEffect, useState } from 'react'
import { WEDDING } from '@/lib/wedding'

// Welcome card shown on load. Opening it is a real click, so it reliably
// starts the song on every browser (autoplay restrictions don't apply).
export function Envelope() {
  const [open, setOpen] = useState(false)

  function openInvitation() {
    window.dispatchEvent(new Event('wedding:play-music'))
    setOpen(true)
  }

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <AnimatePresence
      onExitComplete={() => {
        // The envelope's exit animation is done — release the scroll lock.
        document.body.style.overflow = ''
      }}
    >
      {!open && (
        <motion.div
          className="fixed inset-0 z-[100] flex cursor-pointer touch-none select-none items-center justify-center overflow-hidden overscroll-none bg-[#f8f0dd] px-6"
          onClick={openInvitation}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="pointer-events-none absolute inset-x-0 top-6 flex justify-center gap-4 font-serif text-2xl text-champagne/40 sm:top-8"
            aria-hidden="true"
          >
            ❦ ❦ ❦
          </div>
          <div
            className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center gap-4 font-serif text-2xl text-champagne/40 sm:bottom-8"
            aria-hidden="true"
          >
            ❦ ❦ ❦
          </div>

          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-serif text-xs font-light uppercase tracking-[0.3em] text-champagne sm:text-sm">
              Together with our families
            </p>
            <h1 className="font-serif mt-4 text-5xl font-light text-[#3b2f27] sm:text-6xl">
              {WEDDING.couple[0]} &amp; {WEDDING.couple[1]}
            </h1>
            <p className="font-serif mt-2 text-lg font-light tracking-[0.25em] text-champagne">
              {WEDDING.surnames[0]} &amp; {WEDDING.surnames[1]}
            </p>
            <p lang="hi" className="font-serif mt-8 text-lg tracking-[0.22em] text-champagne/75">
              ॥ शुभ विवाह ॥
            </p>
            <p className="mt-3 text-sm text-[#3b2f27]/60">We invite you to celebrate our wedding with us ♥</p>

            <motion.button
              type="button"
              onClick={openInvitation}
              className="diya-glow mt-10 inline-flex items-center gap-2.5 rounded-full bg-champagne px-10 py-4 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
              whileTap={{ scale: 0.97 }}
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <MailOpen className="size-4" aria-hidden="true" />
              Open Invitation
            </motion.button>
            <p className="mt-4 text-xs text-[#3b2f27]/40">Tap anywhere to open</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
