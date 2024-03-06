import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Performance',
  description: 'ผลงานความสำเร็จของสำนักเรียนวัดอรุณราชวราราม',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="ผลงานความสำเร็จของสำนักเรียนวัดอรุณราชวราราม"
      intro="ในช่วงปีที่ผ่านมาทางสำนักเรียนได้ผลิตศาสนทายาทที่มีคุณภาพมากมายและนี่คือผลงานสำนักเรียนของเรา"
    >
      <div className="space-y-20">
        <ToolsSection title="ผลงาน">
          <Tool title="ยังไม่มีข้อมูล">ยังไม่มีข้อมูล</Tool>
          <Tool title="ยังไม่มีข้อมูล">ยังไม่มีข้อมูล</Tool>
        </ToolsSection>
        <ToolsSection title="นักธรรม">
          <Tool title="นักธรรม">ยังไม่มีข้อมูล</Tool>
        </ToolsSection>
        <ToolsSection title="บาลี">
          <Tool title="บาลี">ยังไม่มีข้อมูล</Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
