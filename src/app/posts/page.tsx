import { allPosts } from "contentlayer/generated";

import PostList from "../components/PostList";

const posts = allPosts.sort((a, b) => b.date.localeCompare(a.date));

const totalPost = posts.length;
const postsPerPage = 5;
const totalPages = Math.ceil(totalPost / postsPerPage);

export const metadata = {
  title: "Listado de POSTS",
  descripcion: "POST - Genereted by NEXT",
};

const Posts = () => {
  return (
    <div>
      <h1 className="text-center my-4 text-3xl">POSTS</h1>
      <div className="grid gap-4 mx-12">
        <PostList posts={posts} />
      </div>
    </div>
  );
};
export default Posts;
