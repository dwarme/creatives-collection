import { memo } from "react";

interface PostModalPhotoProps {
  src: string;
}

const PostModalPhoto: React.FC<PostModalPhotoProps> = ({ src }) => {
  return (
    <img
      className="post-modal-photo"
      src={src}
      height={1920}
      width={1080}
      alt=""
    />
  );
};

export default memo(PostModalPhoto);
