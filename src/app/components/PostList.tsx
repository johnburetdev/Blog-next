import { Post } from "contentlayer/generated";
import PostItem from "./PostItem";

interface Props {
  posts: Post[];
}

const PostList = ({ posts }: Props) => {
  return (
    <div className="mx-14">
      {posts.map((post) => (
        <PostItem key={post._raw.flattenedPath} post={post} />
      ))}
    </div>
  );
};
export default PostList;
