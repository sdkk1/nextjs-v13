import Counter from './counter'

import type { Database } from '../../database.types'

type News = Database['public']['Tables']['news']['Row']

const fetchNews = async () => {
  // NOTE: 意図的に遅延させる
  await new Promise((resolve) => {
    return setTimeout(resolve, 2000)
  })

  const res = await fetch(`${process.env.url}/rest/v1/news?select=*`, {
    headers: new Headers({
      apikey: process.env.apikey as string,
    }),
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data in server')
  }

  const news: News[] = await res.json()
  return news
}

const NewsList = async () => {
  const news = await fetchNews()

  return (
    <div className='m-1 border border-blue-500 p-4'>
      <Counter />
      <p className='my-4 pb-3 text-xl font-medium underline underline-offset-4'>
        News
      </p>
      <ul className='m-3'>
        {news.map((news) => {
          return (
            <li key={news.id}>
              <p> {news.title}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default NewsList
