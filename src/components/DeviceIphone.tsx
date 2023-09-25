import React, { ReactNode } from "react";
import "./DeviceIphone.css";

interface DeviceIphoneProps {
  children?: ReactNode;
  screnImageUr: string;
  video?: React.MediaHTMLAttributes<HTMLVideoElement> & {
    ref?: React.LegacyRef<HTMLVideoElement>;
  };
}

const DeviceIphone: React.FC<DeviceIphoneProps> = ({
  children,
  video,
  screnImageUr,
}) => {
  return (
    <div className="hero-iphone-lockup hero-video-lockup">
      <picture className="hero-iphone-screen ">
        <img alt="" src={screnImageUr} />
      </picture>
      {video?.src && (
        <video
          preload="none"
          playsInline
          loop
          {...video}
          className={`hero-video ${video?.className ?? ""}`}
        ></video>
      )}
      <picture className="overview-hero-shared-hw hero-iphone-hardware">
        <img src="/assets/hero_hardware__large_2x.png" alt="" />
      </picture>
      <div className="hero-iphone-screen__content">
        <div className="content-container">{children}</div>
      </div>
    </div>
  );
};

export default DeviceIphone;
