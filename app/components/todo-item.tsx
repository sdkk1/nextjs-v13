'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid'

import useStore from '../../store'
import supabase from '../../utils/supabase'

import type { Database } from '../../database.types'

type Todo = Database['public']['Tables']['todos']['Row']

const TodoItem = ({ id, title, completed }: Todo) => {
  const router = useRouter()
  const updateTask = useStore((state) => {
    return state.updateEditedTask
  })
  const resetTask = useStore((state) => {
    return state.resetEditedTask
  })

  const updateMutate = async (id: string, completed: boolean) => {
    await supabase.from('todos').update({ completed }).eq('id', id)
    resetTask()
    router.refresh()
  }
  const deleteMutate = async (id: string) => {
    await supabase.from('todos').delete().eq('id', id)
    router.refresh()
  }

  return (
    <li className='my-2'>
      <input
        className='mr-1'
        type='checkbox'
        checked={completed}
        onChange={() => {
          return updateMutate(id, !completed)
        }}
      />
      <Link href={`auth/todo-crud/${id}`}>{title}</Link>
      <div className='float-right ml-20 flex'>
        <PencilIcon
          className='mx-1 h-5 w-5 cursor-pointer text-blue-500'
          onClick={() => {
            updateTask({
              id,
              title,
            })
          }}
        />
        <TrashIcon
          className='h-5 w-5 cursor-pointer text-blue-500'
          onClick={() => {
            deleteMutate(id)
          }}
        />
      </div>
    </li>
  )
}

export default TodoItem
