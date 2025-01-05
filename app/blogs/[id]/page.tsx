import { getPostData, getSortedPostsData } from '@/lib/markdown'
import { format } from 'date-fns'

export async function generateStaticParams() {
  const posts = getSortedPostsData()
  return posts.map((post) => ({
    id: post.id,
  }))
}

export default async function Post({ params }: { params: { id: string } }) {
  const postData = await getPostData(params.id)
  return (
    <article className="prose dark:prose-invert max-w-none">
      <h1 className="text-2xl mb-4 text-primary">{postData.title}</h1>
      <div className="text-muted-foreground mb-8">
        {format(new Date(postData.date), 'MMMM d, yyyy')}
      </div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  )
}

