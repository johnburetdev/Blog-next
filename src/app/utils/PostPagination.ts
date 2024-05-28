import { allPosts, Post } from "contentlayer/generated";

const posts: Post[] = allPosts.sort((a, b) => b.date.localeCompare(a.date));

const totalPost = posts.length;
const postsPerPage = 2;
export const totalPages = Math.ceil(totalPost / postsPerPage);

export const getPostPagination = (currentPage: number = 1) => {

    if(currentPage > totalPages){
        throw new Error(`Page ${currentPage} does no exits`)
    }
   
    const offset = (currentPage - 1) * postsPerPage;
    const currentPost = posts.slice(offset, offset + postsPerPage);

    return {
        
        currentPost
    }
  
}