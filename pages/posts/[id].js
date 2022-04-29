import { fetchPosts } from "../../lib/fetch";
import { baseURL } from "../../utilities/baseURL";

const Post = ( { post } ) => { 

  return (
    <>
    <h1>{ post.title }</h1>
    <p>{ post.body }</p>
    </>
    )
  }
  
  export async function getStaticPaths () { 
    const posts = await fetchPosts();

    const paths = posts.map( post => ( {
      params: { id: String(post.id) },
    } ) );

    return {
      paths,
      fallback: false,
    }
  
  }

export async function getStaticProps ( { params } ) { 
  const response = await fetch( `${ baseURL }/posts/${ params.id }` )
  const post = await response.json();

  return {
    props: {
      post,
    }
  }
};

export default Post;
