import { Suspense } from 'react'

import BlogList from '../components/blog-list'
import NewsList from '../components/news-list'
import Spinner from '../components/spinner'

export const revalidate = 0

const StreamingServerRenderingPage = () => {
  return (
    <section className='flex'>
      <aside className='w-1/4'>
        <section className='fixed m-1 h-full w-1/4 border border-blue-500 bg-gray-200 p-1'>
          <Suspense fallback={<Spinner color='border-green-500' />}>
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/*@ts-ignore*/}
            <BlogList />
          </Suspense>
        </section>
      </aside>
      <main>
        <section className='fixed w-3/4'>
          <Suspense fallback={<Spinner />}>
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/* @ts-ignore*/}
            <NewsList />
          </Suspense>
        </section>
      </main>
    </section>
  )
}

export default StreamingServerRenderingPage
