import { baseURL } from "../utilities/baseURL";

///Feth 10 posts
export async function fetchPosts () {
  const response = await fetch( `${ baseURL }/posts?limit=10` )
  const data = await response.json();

  return data;
}

//Fetch 10 photos
export async function fetchPhotos () { 
  const response = await fetch( `${ baseURL }/photos?limit=10` );
  const data = await response.json();

  return data;
}