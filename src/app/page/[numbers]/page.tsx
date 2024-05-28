import PostList from "@/app/components/PostList";
import PostPagination from "@/app/components/PostPagination";
import { getPostPagination, totalPages } from "@/app/utils/PostPagination";
import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";

interface Props {
  params: {
    numbers: string;
  };
}
export const generateStaticParams = () => {
  return Array.from({ length: totalPages }).map((_, index) => ({
    numbers: `${index + 1}`,
  }));
};

const LayoutPages = ({ params }: Props) => {
  let arrayCurrentPost;
  try {
    if (!/^\d+$/.test(params.numbers)) {
      throw new Error(`Page does no exits`);
    }
    const currentPage = parseInt(params.numbers);
    arrayCurrentPost = getPostPagination(currentPage).currentPost;
  } catch (error) {
    notFound();
  }

  return (
    <div>
      <h1 className="text-center my-4 text-3xl">POSTS</h1>
      <div className="grid gap-4 mx-12">
        <PostList posts={arrayCurrentPost} />
        {totalPages > 1 && (
          <PostPagination
            totalPages={totalPages}
            currentPage={parseInt(params.numbers)}
          />
        )}
      </div>
    </div>
  );
};
export default LayoutPages;
