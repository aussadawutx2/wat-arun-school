import { type Metadata } from 'next'

import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata: Metadata = {
  title: 'You’re subscribed',
  description: 'Thanks for subscribing to my newsletter.',
}

export default function ThankYou() {
  return (
    <SimpleLayout
      title="ขอบคุณครับ เราจะติดต่อหาท่านโดยเร็วที่สุด."
      intro="โปรดรอทางเราส่งข้อมูลให้ในภายหลัง รออัพเดตข่าวสารจากทางเราได้เลย"
    />
  )
}
