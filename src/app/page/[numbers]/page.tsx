import PostList from "@/app/components/PostList";
import PostPagination from "@/app/components/PostPagination";
import { getPagination } from "@/app/utils/pagination";
import { allPosts, Post } from "contentlayer/generated";
import { notFound } from "next/navigation";

const posts: Post[] = allPosts.sort((a, b) => b.date.localeCompare(a.date));
interface Props {
  params: {
    numbers: string;
  };
}
export const generateStaticParams = () => {
  return Array.from({ length: posts.length }).map((_, index) => ({
    numbers: `${index + 1}`,
  }));
};

const LayoutPages = ({ params }: Props) => {
  let arrayCurrentPost;
  let totalPagesNumber;
  try {
    const { currentPost, totalPages } = getPagination(posts, 2, params.numbers);
    arrayCurrentPost = currentPost;
    totalPagesNumber = totalPages;
  } catch (error) {
    notFound();
  }

  return (
    <div>
      <div className="grid gap-4">
        <PostList posts={arrayCurrentPost} />
        {totalPagesNumber > 1 && (
          <PostPagination
            totalPages={totalPagesNumber}
            currentPage={parseInt(params.numbers)}
          />
        )}
      </div>
    </div>
  );
};
export default LayoutPages;
