import { BASE_PATH } from '@/lib/base-path'

export const WEDDING = {
  couple: ['Harsh', 'Priyanka'] as const,
  dateLabel: 'December 13 – 14, 2026',
  location: 'VisakhaPatnam, AP',
  venue: 'TSR Royal Gardens',
  venueAddress: 'VisakhaPatnam, AP 530040',
  // First celebration — used for the hero countdown (local ISO, IST)
  date: new Date('2026-12-13T19:00:00+05:30'),
  mapsUrl: 'https://maps.app.goo.gl/vrUcx11Wdo7fSsYU7',
}

// Reception hosted by the groom's family in Nagpur
export const RECEPTION = {
  dateLabel: 'December 19, 2026',
  location: 'Nagpur, MH',
  venue: 'Maharaj Bag Club',
  venueAddress: 'Nagpur, MH',
  date: new Date('2026-12-19T19:30:00+05:30'),
  mapsUrl: 'https://maps.app.goo.gl/5JT13riD9u2b88k69',
}

export type ScheduleItem = {
  title: string
  time: string
  start: Date
  durationMinutes: number
  venue: string
  address: string
  description: string
  note?: string
  calendarLocation?: string
  mapsUrl?: string
}

export type ScheduleDay = {
  label: string
  dateLabel: string
  events: ScheduleItem[]
  separated?: boolean
}

export const SCHEDULE: ScheduleDay[] = [
  {
    label: 'Day One',
    dateLabel: 'Sunday, December 13, 2026',
    events: [
      {
        title: 'Engagement & Dinner',
        time: '7:00 PM onwards',
        start: new Date('2026-12-13T19:00:00+05:30'),
        durationMinutes: 240,
        venue: WEDDING.venue,
        address: WEDDING.venueAddress,
        description: 'The exchange of rings, followed by dinner with family and friends.',
      },
    ],
  },
  {
    label: 'Day Two',
    dateLabel: 'Monday, December 14, 2026',
    events: [
      {
        title: 'Wedding Ceremony',
        time: '4:00 AM',
        start: new Date('2026-12-14T04:00:00+05:30'),
        durationMinutes: 180,
        venue: WEDDING.venue,
        address: WEDDING.venueAddress,
        description: 'The sacred wedding muhurta — the pheras beneath the mandap in the early hours.',
      },
    ],
  },
  {
    label: 'Reception at Nagpur',
    dateLabel: RECEPTION.dateLabel,
    separated: true,
    events: [
      {
        title: 'Reception',
        time: '7:30 PM onwards',
        start: RECEPTION.date,
        durationMinutes: 240,
        venue: RECEPTION.venue,
        address: RECEPTION.venueAddress,
        description: 'Dinner and celebration hosted by the groom’s family in Nagpur.',
        calendarLocation: `${RECEPTION.venue}, ${RECEPTION.venueAddress}`,
        mapsUrl: RECEPTION.mapsUrl,
      },
    ],
  },
]

export type Moment = {
  src: string
  alt: string
}

// Photos are replaced manually: keep the same filenames in public/ (moment-1..7).
// The gallery is masonry-style, so photos display at their natural aspect ratio.
export const MOMENTS: Moment[] = [
  { src: `${BASE_PATH}/moment-1.jpeg`, alt: 'The couple' },
  { src: `${BASE_PATH}/moment-2.jpeg`, alt: 'The couple' },
  { src: `${BASE_PATH}/moment-5.jpeg`, alt: 'The couple' },
  { src: `${BASE_PATH}/moment-6.jpeg`, alt: 'The couple' },
  { src: `${BASE_PATH}/moment-4.jpeg`, alt: 'The couple' },
  { src: `${BASE_PATH}/moment-7.jpeg`, alt: 'The couple' },
]
