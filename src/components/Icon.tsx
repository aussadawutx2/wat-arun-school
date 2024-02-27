import * as React from 'react'

export function IconPinMapFill(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
        fillRule="evenodd"
        d="M3.1 11.2a.5.5 0 01.4-.2H6a.5.5 0 010 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 010-1h2.5a.5.5 0 01.4.2l3 4a.5.5 0 01-.4.8H.5a.5.5 0 01-.4-.8l3-4z"
      />
      <path
        className="stroke-zinc-400 dark:stroke-zinc-500"
        fillRule="evenodd"
        d="M4 4a4 4 0 114.5 3.969V13.5a.5.5 0 01-1 0V7.97A4 4 0 014 3.999z"
      />
    </svg>
  )
}

export function BriefcaseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}
