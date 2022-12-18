'use client'

import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div className='border border-orange-500 p-1 text-center'>
      <p> {count}</p>
      <button
        className='rounded bg-indigo-600 px-3 py-1 font-medium text-white hover:bg-indigo-700'
        onClick={() => {
          return setCount((prevCount) => {
            return prevCount + 1
          })
        }}
      >
        increment
      </button>
    </div>
  )
}

export default Counter
