/* eslint-disable react/jsx-no-undef */
import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { CallIcon, FaceBookIcon, MailIcon } from '@/components/SocialIcons'
import portraitImage from '@/images/photos/watarunschool.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-yellow-500 dark:text-zinc-200 dark:hover:text-yellow-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-yellow-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description: 'สำนักเรียน วัดอรุณราชวราราม',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-xl font-bold tracking-tight text-zinc-800 sm:text-2xl dark:text-zinc-100">
            สำนักเรียน วัดอรุณราชวราราม ราชวรมหาวิหาร
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              ในสมัยก่อน
              วัดอรุณราชวรารามเป็นสำนักศาสนศึกาาสังกัดสำนักเรียนวัดมหาธาตุ
              พระนคร ต่อมาเมื่อ พ.ศ. ๒๔๗๙ พระเดชพระคุณพระอุบาลีคุณูปมาจารย์ (นาค
              สุมนนาโค) เจ้าอาวาสองค์ที่ ๑๐ ของวัดอรุณราชวราราม
              ได้ดำเนินการจัดตั้งสำนักเรียนวัดอรุณราชวราราม
              และได้รับอนุมัติให้เป็นสำนักเรียน เมื่อ วันที่ ๙ มิถุนายน ๒๔๗๙
            </p>
            <p>
              เมื่อก่อตั้งเป็นสำนักเรียนแล้ว สำนักเรียนวัดอรุณราชวราราม
              มีสำนักศาสนศึกษาในละแวกใกล้เคียงอยู่ในสังกัดหลายสำนัก เช่น
              สำนักศาสนศึกษาวัดนาคกลาง วัดหงส์รัตนาราม วัดราชสิทธาราม
              วัดใหม่พิเรนทร์ วัดสังข์กระจาย วัดชิโนรสาราม วัดท่าพระ
              วัดประดิษฐาราม วัดดีดวด วัดประดู่ในทรงธรรม นอกจากนี้
              ยังมีพระภิกษุสามเณรวัดอื่น ๆ มาเข้าสมัครสอบอีกหลายวัด
            </p>
            <p>
              สำนักเรียนวัดอรุณราชวราราม
              เป็นสำนักเรียนที่เก่าที่สุดในเขตบางกอกใหญ่ ก่อตั้งมาเป็นเวลา ๗๕ ปี
              (พ.ศ.๒๕๕๕) วัตถุประสงค์ ๑.
              เพื่อรักษาหลักพระธรรมวินัยของพระพุทธศาสนา
              ๒.เพื่อความมั่นคงแห่งพระพุทธศาสนา ๓.
              เพื่อใช้ในกิจการคณะสงฆ์และการพระศาสนา๔.
              เพื่อสร้างศาสนทายาทสืบอายุพระพุทธศาสนา ๕.
              เพื่อให้พัฒนาชาติบ้านเมืองด้วยคุณธรรมของพระศาสนา และ ๖.
              เพื่อความมั่งคงของประเทศชาติอันเป็นส่วนรวม
            </p>
            <p>
              ปัจจุบันพระพรหมวัชรเมธี (สมเกียรติ โกวิโท ป.ธ.๙) เจ้าคณะภาค ๙
              เจ้าอาวาสวัดอรุณราชวราราม
              ได้ป็นผู้สืบทอดและเอาใจใส่สำนักเรียนวัดอรุณราชวราราม
              ให้สมกับเป็นสำนักเรียนที่เก่าที่สุดในเขตบางกอกใหญ่
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://www.facebook.com/Arunpalischool158"
              icon={FaceBookIcon}
              className="mt-4"
            >
              Follow on facebook
            </SocialLink>
            <SocialLink href="tel:0941478550" icon={CallIcon} className="mt-4">
              094-147-8550
            </SocialLink>
            <SocialLink
              href="mailto:Arunlalischool@gmail.com"
              icon={MailIcon}
              className="  mt-4 border-zinc-100 dark:border-zinc-700/40"
            >
              Arunpalischool158@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
