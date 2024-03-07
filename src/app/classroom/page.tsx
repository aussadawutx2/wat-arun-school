import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoPali4 from '../classroom/logo-classroom/ประโยค4.jpg'
import logoPali3 from '../classroom/logo-classroom/ประโยค3.png'
import logoPali1_2 from '../classroom/logo-classroom/ประโยค1-2.jpg'

const classroom = [
  {
    name: 'ห้องประโยค ป.ธ.1-2',
    description:
      'บ่าย / จันทร์-เสาร์ สอนวิชาบาลีไวยากรณ์โดย พระมหานพพร อริยญาโณ ป.ธ.๙ เช้า , ค่ำ / จันทร์-เสาร์ สอนแปลมคธเป็นไทยโดย อาจารย์เอกชัย โชติไธสง ป.ธ.๙',
    link: { href: '#', label: 'Click To Classroom' },
    logo: logoPali1_2,
  },
  {
    name: 'ห้องประโยค ป.ธ.3',
    description:
      'บ่าย , ค่ำ / จันทร์-เสาร์ เข้าสอนทุกวิชาโดย อาจารย์สนิท ธรรมมา ป.ธ.๙ ',
    link: { href: '#', label: 'Click To Classroom' },
    logo: logoPali3,
  },
  {
    name: 'ห้องประโยค ป.ธ.4',
    description:
      'เช้า / จันทร์, อังคาร, พุธ สอนวิชาแปลไทยเป็นมคธโดย พระมหาสุธินันท์ สุทฺธินนฺโท ป.ธ.๙  เช้า / พฤหัส, ศุกร์, เสาร์ สอนวิชาแปลมคธเป็นไทย โดย พระมหาเปรม เขมโก ป.ธ.๙',
    link: { href: '#', label: 'Click To Classroom' },
    logo: logoPali4,
  },
]

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Classroom',
  description: 'ยินดีต้อนรับเข้าสู่ห้องเรียนของสำนักเรียนของเรา!!!',
}

export default function Classroom() {
  return (
    <SimpleLayout
      title="ยินดีต้อนรับเข้าสู่ห้องเรียนของสำนักเรียนของเรา!!!"
      intro="สำนักเรียนวัดอรุณราชวราราม ได้ทำการเปิดสอนเปรียญธรรมตั้งแต่ประโยค 1-2 จนถึงเปรียญธรรม 9 ประโยค อีกทั้งยังเปิดสอนนักธรรมชั้นตรี-เอก โดยท่านสามารถเลือกห้องเรียนของท่านได้จากห้องเรียนด้านล่างนี้เลย."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {classroom.map((classroom) => (
          <Card as="li" key={classroom.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={classroom.logo}
                alt=""
                className="h-10 w-10 rounded-full"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={classroom.link.href}>{classroom.name}</Card.Link>
            </h2>
            <Card.Description>{classroom.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-yellow-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{classroom.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
