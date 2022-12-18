'use client'

import { type FC, useEffect } from 'react'

type Props = {
  error: Error
}

const Error: FC<Props> = ({ error }) => {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error)
  }, [error])

  return (
    <div>
      <p className='mt-6 text-center text-red-500'>
        Data fetching in server failed
      </p>
    </div>
  )
}

export default Error
