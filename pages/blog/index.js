
import { fetchPosts } from "../../lib/fetch";

const Blog = ( { posts } ) => { 

  const postList = posts.map( post => <li>{ post.title }</li>)
  return (
    <ul>
      {postList }
</ul>
  )
}

export async function getStaticProps () { 
  const posts = await fetchPosts();

  return {
    props: {
      posts,
    }
  }
}

export default Blog;