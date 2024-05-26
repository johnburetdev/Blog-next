import PostList from "@/app/components/PostList";
import PostPagination from "@/app/components/PostPagination";
import { allPosts, Post } from "contentlayer/generated";

interface Props {
  params: {
    numbers: string;
  };
}
export const generateStaticParams = () => {
  return allPosts.map((post) => ({ numbers: post._raw.flattenedPath }));
};
const posts: Post[] = allPosts.sort((a, b) => b.date.localeCompare(a.date));

const totalPost = posts.length;
const postsPerPage = 5;
const totalPages = Math.ceil(totalPost / postsPerPage);

const LayoutPages = ({ params }: Props) => {
  const currentPage = parseInt(params.numbers);
  const offset = (currentPage - 1) * postsPerPage;

  const currentPost = posts.slice(offset, offset + postsPerPage);

  return (
    <div>
      <h1 className="text-center my-4 text-3xl">POSTS</h1>
      <div className="grid gap-4 mx-12">
        <PostList posts={currentPost} />
        <PostPagination totalPages={totalPages} currentPage={currentPage} />
      </div>
    </div>
  );
};
export default LayoutPages;
