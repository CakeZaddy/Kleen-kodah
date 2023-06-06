import { PostCard, PostWidgets, Categories } from '../components'
import { getPosts } from '../Services'

export async function getStaticProps() {
  const posts = (await getPosts()) || []

  return {
    props: { posts },
  }
}

export default function Home({ posts }) {
  return (
    <main className='container mx-auto px-10 mb-8'>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='col-span-1 lg:col-span-8'>
          {posts.map((post) => (
            <PostCard post={post.node} key={post.title} />
          ))}
        </div>
        <div className='col-span-1 lg:col-span-4'>
          <div className='relative top-8 lg:sticky'>
            <PostWidgets />
            <Categories />
          </div>
        </div>
      </div>
    </main>
  )
}
