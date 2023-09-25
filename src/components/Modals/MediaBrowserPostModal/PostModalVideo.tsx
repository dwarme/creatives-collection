import { memo, useEffect, useRef } from "react";

interface PostModalVideoProps {
  src: string;
  poster: string;
}

const PostModalVideo: React.FC<PostModalVideoProps> = ({
  src: videoSrc,
  poster: videoPoster,
}) => {
  const refVideo = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoDOM = refVideo.current;
    if (!videoDOM) {
      return;
    }

    const playHander = () => {
      videoDOM.removeEventListener("play", playHander);
    };

    refVideo.current.addEventListener("play", playHander);

    return () => videoDOM.removeEventListener("play", playHander);
  }, []);

  useEffect(() => {
    const videoDOM = refVideo.current;
    if (!videoDOM) return;
    if (videoDOM.paused) return;

    return () => videoDOM.pause();
  }, []);

  return (
    <video
      ref={refVideo}
      className="post-modal-video"
      src={videoSrc}
      poster={videoPoster}
      controls
      loop
      preload="none"
      height={1920}
      width={1080}
    ></video>
  );
};

export default memo(PostModalVideo);
