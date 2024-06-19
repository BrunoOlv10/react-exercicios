import { use, Suspense } from 'react'

const fetchPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    return res.json()
}

const PostItems = () => {

    const posts = use(fetchPosts())

  return (
    <div>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </div>
  )
}

const Posts = () => {
    return (
        <Suspense fallback='Carregando posts...'>
            <PostItems />
        </Suspense>
    )
}

export default Posts
