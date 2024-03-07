import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ContentSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({
  title,
  description,
  event,
  cta,
  href,
}: {
  title: string
  description: string
  event: string
  cta: string
  href: string
}) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export const metadata: Metadata = {
  title: 'Content',
  description: 'พื้นที่สำหรับอัพโหลดวีดิโอและกิจกรรมของทางสำนักเรียน',
}

export default function Speaking() {
  return (
    <SimpleLayout
      title="พื้นที่สำหรับอัพโหลดวีดิโอและกิจกรรมของทางสำนักเรียน"
      intro=""
    >
      <div className="space-y-20">
        <ContentSection title="Activity">
          <Appearance
            href="https://www.youtube.com/watch?v=ys7CBG7ZeBg"
            title="เปิดตำนาน `วัดแจ้ง` วัดอรุณราชวราราม (ที่คุณอาจไม่เคยรู้) [History of Wat Arun] "
            description="ประวัติวัดอรุณราชวราราม ที่คุณอาจไม่เคยรู้"
            event="12 มีนาคม 2563"
            cta="Watch video"
          />
          <Appearance
            href="https://www.youtube.com/watch?v=vPoazQL5JBE"
            title="รู้จักสำนักเรียนของเราให้มากขึ้น"
            description="พาเยี่ยมชมสำนักเรียนวัดอรุณราชวราราม และพูดคุยกับอาจารย์ใหญของสำนักเรียนอย่างใกล้ชิด"
            event="23 มกราคม 2565"
            cta="Watch video"
          />
        </ContentSection>
        {/* <ContentSection title="Podcasts">
          <Appearance
            href="#"
            title="Using design as a competitive advantage"
            description="How we used world-class visual design to attract a great team, win over customers, and get more press for Planetaria."
            event="Encoding Design, July 2022"
            cta="Listen to podcast"
          />
          <Appearance
            href="#"
            title="Bootstrapping an aerospace company to $17M ARR"
            description="The story of how we built one of the most promising space startups in the world without taking any capital from investors."
            event="The Escape Velocity Show, March 2022"
            cta="Listen to podcast"
          />
          <Appearance
            href="#"
            title="Programming your company operating system"
            description="On the importance of creating systems and processes for running your business so that everyone on the team knows how to make the right decision no matter the situation."
            event="How They Work Radio, September 2021"
            cta="Listen to podcast"
          />
        </ContentSection> */}
      </div>
    </SimpleLayout>
  )
}
