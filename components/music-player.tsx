'use client'

import { motion } from 'framer-motion'
import { Pause, Play } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { asset } from '@/lib/base-path'

function Equalizer({ active }: { active: boolean }) {
  return (
    <span className="flex h-4 items-end gap-[2px]" aria-hidden="true">
      {[0, 1, 2, 3].map((bar) => (
        <span
          key={bar}
          className="w-[3px] origin-bottom rounded-full bg-white"
          style={{
            height: '100%',
            animation: active
              ? `equalize 0.9s ease-in-out ${bar * 0.15}s infinite`
              : 'none',
            transform: active ? undefined : 'scaleY(0.3)',
          }}
        />
      ))}
    </span>
  )
}

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const playerRef = useRef<HTMLDivElement>(null)
  const pausedByUser = useRef(false)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.volume = 0.55

    // Browsers block sound autoplay until a user gesture. Keep retrying on
    // every interaction (not just the first) — on some phones the first
    // gesture is a scroll, which browsers may not count as play-allowing.
    // Once the guest pauses deliberately, these retries stop for good.
    const tryPlay = (e: Event) => {
      if (pausedByUser.current) return
      const target = e.target as Node
      if (playerRef.current?.contains(target)) return
      if (audio.paused) void audio.play().catch(() => undefined)
    }
    const events = ['pointerdown', 'touchstart', 'touchend', 'click', 'keydown', 'scroll'] as const

    void audio.play().catch(() => undefined)
    events.forEach((evt) => window.addEventListener(evt, tryPlay, { passive: true }))

    return () => {
      events.forEach((evt) => window.removeEventListener(evt, tryPlay))
    }
  }, [])

  async function togglePlayback() {
    const audio = audioRef.current
    if (!audio) return

    if (playing) {
      pausedByUser.current = true
      audio.pause()
      return
    }

    try {
      pausedByUser.current = false
      audio.volume = 0.55
      await audio.play()
    } catch {
      setPlaying(false)
    }
  }

  return (
    <motion.div
      ref={playerRef}
      className="fixed bottom-5 right-5 z-50 flex items-center gap-1"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.4, duration: 0.6 }}
    >
      <audio
        ref={audioRef}
        src={asset('/navrai-maajhi-english-vinglish.mp3')}
        autoPlay
        loop
        preload="auto"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      <button
        type="button"
        onClick={togglePlayback}
        aria-pressed={playing}
        aria-label={playing ? 'Pause wedding song' : 'Play wedding song'}
        className="diya-glow flex size-14 items-center justify-center gap-1.5 rounded-full bg-champagne text-white shadow-lg shadow-black/20 transition-transform hover:scale-105"
      >
        <span className="flex size-5 items-center justify-center">
          {playing ? (
            <Pause className="size-4" aria-hidden="true" />
          ) : (
            <Play className="size-4 translate-x-[1px]" aria-hidden="true" />
          )}
        </span>
        <Equalizer active={playing} />
      </button>
    </motion.div>
  )
}
