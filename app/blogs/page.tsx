import Link from 'next/link'
import { getSortedPostsData } from '@/lib/markdown'
import { format } from 'date-fns'

export default function Blogs() {
  const allPostsData = getSortedPostsData()

  return (
    <div className="space-y-8">
      <h1 className="text-2xl mb-8 text-primary">blogs</h1>
      
      <section>
        <h2 className="text-xl mb-4 text-primary">all posts</h2>
        <ul className="space-y-4">
          {allPostsData.map(({ id, date, title }) => (
            <li key={id} className="border-b border-muted pb-4">
              <Link href={`/blogs/${id}`} className="hover:underline">
                <h3 className="text-lg font-semibold">{title}</h3>
              </Link>
              <small className="text-muted-foreground">
                {format(new Date(date), 'MMMM d, yyyy')}
              </small>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

