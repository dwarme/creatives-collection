import React, { useMemo } from "react";
import { IPost } from "../../types/posts";
import "./PostsItem.css";
import PostsItemVideo from "./PostsItemVideo";
import PostsItemPhoto from "./PostsItemPhoto";

interface PostsItemProps {
  post: IPost;
  onOpenPostModal?: () => void;
}

const PostsItem: React.FC<PostsItemProps> = ({ post, onOpenPostModal }) => {
  const postsItemType = useMemo(() => {
    if (post.isVideo) {
      return <PostsItemVideo post={post} onOpenPostModal={onOpenPostModal} />;
    }

    return <PostsItemPhoto post={post} onOpenPostModal={onOpenPostModal} />;
  }, [post, onOpenPostModal]);

  return postsItemType;
};

export default PostsItem;
