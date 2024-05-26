import Link from "next/link";
import { Post } from "contentlayer/generated";

interface Props {
  post: Post;
}

const PostItem = ({ post }: Props) => {
  return (
    <>
      <article className="shadow-md rounded-md p-4 border my-2">
        <h2 className="my-3 text-2xl mx-5">
          <Link className="text-cyan-700 hover:text-blue-600" href={post.url}>
            {post.title}
          </Link>
        </h2>
        <time>
          {new Date(post.date).toLocaleDateString("es-ES", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      </article>
    </>
  );
};
export default PostItem;
