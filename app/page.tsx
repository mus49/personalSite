import Link from 'next/link'
import { getSortedPostsData } from '@/lib/markdown'

export default function Home() {
  const latestPosts = getSortedPostsData().slice(0, 3)

  return (
    <div className="space-y-8">
      <section className="prose dark:prose-invert">
        <p>i am a final year student, studying computer science.</p>
        <p>mainly focused in deep learning and classical machine learning algorithms.</p>
      </section>

      <section>
        <h2 className="text-xl mb-4 text-primary">experience</h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>research assistant @ my college</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl mb-4 text-primary">research papers</h2>
        <p className="text-muted-foreground">[working on one]</p>
      </section>

      <section>
        <h2 className="text-xl mb-4 text-primary">latest blog posts</h2>
        <ul className="space-y-2">
          {latestPosts.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/blogs/${id}`} className="hover:underline">
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/blogs" className="text-primary hover:underline mt-4 inline-block">
          View all posts
        </Link>
      </section>


    </div>
  )
}

