'use client'

import { useRouter } from 'next/navigation'
import { type FC } from 'react'

type Props = {
  destination?: string
}

const RouterBtn: FC<Props> = ({ destination = '' }) => {
  const router = useRouter()

  return (
    <button
      className='rounded bg-indigo-600 px-3 py-1 font-medium text-white hover:bg-indigo-700'
      onClick={() => {
        router.push(`/${destination}`)
      }}
    >
      Nav to {destination ? destination : 'home'}
    </button>
  )
}

export default RouterBtn
