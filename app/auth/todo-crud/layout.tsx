import { Suspense } from 'react'

import Spinner from '../../components/spinner'
import EditTask from '../../components/todo-edit'
import TodoList from '../../components/todo-list'

const TodoLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className='flex'>
      {/* eslint-disable-next-line tailwindcss/no-arbitrary-value */}
      <aside className={`h-[calc(100vh-56px)] w-1/4 bg-gray-200`}>
        <EditTask />
        <Suspense fallback={<Spinner />}>
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/* @ts-ignore*/}
          <TodoList />
        </Suspense>
      </aside>
      <main className='flex flex-1 justify-center'>{children}</main>
    </section>
  )
}

export default TodoLayout
