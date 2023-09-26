import React from "react";
import DeviceIphone from "../DeviceIphone";
import { IPost } from "../../types/posts";
import PostModalTrigger from "./PostModalTrigger";
import "./PostsItem.css";
import PostsItemOwnerInfo from "./PostsItemOwnerInfo";

interface PostsItemPhotoProps {
  post: IPost;
  onOpenPostModal?: () => void;
}

const PostsItemPhoto: React.FC<PostsItemPhotoProps> = ({
  post,
  onOpenPostModal,
}) => {
  return (
    <li className="post-item">
      <DeviceIphone screnImageUr={post.photoUrl!}>
        <PostModalTrigger onClick={onOpenPostModal} />
      </DeviceIphone>
      <PostsItemOwnerInfo owner={post.owner} />
    </li>
  );
};

export default PostsItemPhoto;
