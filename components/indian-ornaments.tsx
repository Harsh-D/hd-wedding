import { asset } from '@/lib/base-path'

export function GaneshEmblem({ className }: { className?: string }) {
  return (
    <img
      src={asset('/ganesha-emblem-transparent.png')}
      alt="Lord Ganesha"
      className={className ?? 'h-24 w-24 object-contain sm:h-28 sm:w-28'}
    />
  )
}

