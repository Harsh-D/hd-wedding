import type { Metadata } from 'next'
import { WeddingSite } from '@/components/wedding-site'
import { MOMENTS } from '@/lib/wedding'

export const metadata: Metadata = {
  title: 'Harsh & Priyanka · Reception, Nagpur',
  description:
    'Join us for the wedding reception of Harsh & Priyanka at Maharaj Bag Club, Nagpur, on December 19, 2026.',
  openGraph: {
    title: 'Harsh & Priyanka · Reception, Nagpur',
    description:
      'Join us for the wedding reception of Harsh & Priyanka at Maharaj Bag Club, Nagpur, on December 19, 2026.',
  },
}

export default function ReceptionPage() {
  return <WeddingSite moments={MOMENTS} variant="reception" />
}
