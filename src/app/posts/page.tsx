import PostList from "../components/PostList";
import PostPagination from "../components/PostPagination";
import { getPostPagination, totalPages } from "../utils/PostPagination";

export const metadata = {
  title: "Listado de POSTS",
  descripcion: "POST - Genereted by NEXT",
};

const Posts = () => {
  const { currentPost } = getPostPagination();

  return (
    <div>
      <h1 className="text-center my-4 text-3xl">POSTS</h1>
      <div className="grid gap-4 mx-12">
        <PostList posts={currentPost} />
        {totalPages > 1 && <PostPagination totalPages={totalPages} />}
      </div>
    </div>
  );
};
export default Posts;
