'use client'

import { useEffect, useState } from 'react'

const TimerCounter = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      return setCount((prevCount) => {
        return prevCount + 1
      })
    }, 1000)

    return () => {
      return clearInterval(timer)
    }
  }, [])

  return (
    <div>
      <p> {count}</p>
      <button
        className='my-3 rounded bg-indigo-600 py-1 px-3 text-white hover:bg-indigo-700'
        onClick={() => {
          return setCount(0)
        }}
      >
        reset
      </button>
    </div>
  )
}

export default TimerCounter