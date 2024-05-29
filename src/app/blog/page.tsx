import PostList from "../components/PostList";
import PostPagination from "../components/PostPagination";
import { allPosts, Post } from "contentlayer/generated";
import { getPagination } from "../utils/pagination";

const posts: Post[] = allPosts.sort((a, b) => b.date.localeCompare(a.date));

export const metadata = {
  title: "Listado de POSTS",
  descripcion: "POST - Genereted by NEXT",
};

const Posts = () => {
  const { currentPost, totalPages } = getPagination(posts);

  return (
    <div>
      <div className="grid gap-4 ">
        <PostList posts={currentPost} />
        {totalPages > 1 && <PostPagination totalPages={totalPages} />}
      </div>
    </div>
  );
};
export default Posts;
