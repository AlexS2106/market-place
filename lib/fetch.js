import { baseURL } from "../utilities/baseURL";

export async function fetchPosts () {
  const response = await fetch( `${ baseURL }/posts` )
  const data = await response.json();

  return data;
 }