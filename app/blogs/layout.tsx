import BlogListStatic from '../components/blog-list-static'
import RefreshBtn from '../components/refresh-btn'

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className='flex'>
      {/* eslint-disable-next-line tailwindcss/no-arbitrary-value */}
      <aside className={`h-[calc(100vh-56px)] w-1/4 bg-gray-200 p-2`}>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/*@ts-ignore*/}
        <BlogListStatic />
        <div className='flex justify-center'>
          <RefreshBtn />
        </div>
      </aside>
      <main className='flex flex-1 justify-center'>{children}</main>
    </section>
  )
}

export default BlogLayout
