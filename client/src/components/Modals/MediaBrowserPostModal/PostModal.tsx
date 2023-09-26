import React, {
  forwardRef,
  memo,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { IPost } from "../../../types/posts";
import ModalStandard from "../ModalStandard";
import "./PostModal.css";
import PostModalVideo from "./PostModalVideo";
import PostModalPhoto from "./PostModalPhoto";

interface PostModalProps {
  onClose?: () => void;
  open?: boolean;
}

const PostModal = forwardRef(function ({ open, onClose }: PostModalProps, ref) {
  const [isOpen, setOpen] = useState<boolean>(Boolean(open));
  const [post, setPost] = useState<IPost | undefined>();
  const refModalStandard = useRef<{ open: () => void }>(null);

  const handleOpen = (postData: IPost) => {
    setPost(postData);
    refModalStandard.current?.open();
    setOpen(true);
  };

  const handleClose = () => {
    if (onClose) onClose();
    setOpen(false);
  };

  useImperativeHandle(ref, () => ({
    open: handleOpen,
  }));

  return (
    <ModalStandard
      ref={refModalStandard}
      onClose={handleClose}
      open={open}
      id="post-modal"
    >
      <div className="post-modal-content">
        <div className="post-modal-media">
          {isOpen && post && <PostMedia post={post} />}
        </div>
      </div>
    </ModalStandard>
  );
});

const PostMedia: React.FC<{ post: IPost }> = ({ post }) => {
  if (post.isVideo) {
    return <PostModalVideo poster={post.thumbnailSrc!} src={post.videoUrl!} />;
  }

  return <PostModalPhoto src={post.photoUrl!} />;
};

export default memo(PostModal);
