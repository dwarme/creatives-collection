import React, { useRef, useState } from "react";
import DeviceIphone from "../DeviceIphone";
import { IPost } from "../../types/posts";
import "./PostsItem.css";
import PostModalTrigger from "./PostModalTrigger";
import PostsItemOwnerInfo from "./PostsItemOwnerInfo";

interface PostsItemVideoProps {
  post: IPost;
  onOpenPostModal?: () => void;
}

const PostsItemVideo: React.FC<PostsItemVideoProps> = ({
  post,
  onOpenPostModal,
}) => {
  const [isVideoPaused, setVideoPaused] = useState(true);
  const refVideo = useRef<HTMLVideoElement>(null);

  const handleControlsClick = () => {
    setVideoPaused((prev) => !prev);
    if (refVideo.current?.paused) {
      refVideo.current!.play();
      return;
    }

    refVideo.current!.pause();
  };

  return (
    <li className="post-item">
      <DeviceIphone
        screnImageUr={post.thumbnailSrc!}
        video={{
          ref: refVideo,
          src: post.videoUrl!,
          preload: "none",
          loop: true,
        }}
      >
        <button
          className={`overlay play-pause-button ${
            !isVideoPaused ? "playing" : ""
          }`}
          onClick={handleControlsClick}
        >
          <div className="play-icon-container">
            <svg className="svg-icon play-icon" viewBox="0 0 56 56">
              <path d="M20.8,36V20c0-1.6,1-2.5,2.3-2.5c0.7,0,1.1,0.1,1.7,0.5l13.4,7.7c1.2,0.7,1.8,1.2,1.8,2.3 c0,1.1-0.6,1.6-1.8,2.3L24.8,38c-0.6,0.4-1,0.5-1.7,0.5C21.8,38.5,20.8,37.6,20.8,36"></path>
            </svg>
          </div>
        </button>
        <PostModalTrigger onClick={onOpenPostModal} />
      </DeviceIphone>
      <PostsItemOwnerInfo owner={post.owner} />
    </li>
  );
};

export default PostsItemVideo;
