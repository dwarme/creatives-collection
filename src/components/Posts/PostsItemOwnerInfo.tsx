import React, { memo, useMemo } from "react";
import { IPostOwner, IPostOwnerSource } from "../../types/posts";
import "./PostsItemOwnerInfo.css";
import { assets } from "../../utils/constants";

const PostsItemOwnerInfo: React.FC<{ owner: IPostOwner }> = ({ owner }) => {
  return (
    <div className="owner-info-container">
      <div className="owner-info">
        <div className="source-logo-container">
          <OwnerSourceLogo source={owner.source} />
        </div>
        <div className="owner-username">
          <span>@{owner.username}</span>
        </div>
      </div>
    </div>
  );
};

const OwnerSourceLogo: React.FC<{ source: IPostOwnerSource }> = ({
  source,
}) => {
  const imgClassName = "source-logo";
  const sourceLogo = useMemo(() => {
    switch (source) {
      case "instagram":
        return (
          <img
            src={assets.logo.instagram}
            alt="instagram logo"
            className={imgClassName}
            height={44}
            width={44}
          />
        );
      case "facebook":
        return (
          <img
            src={assets.logo.facebook}
            alt="facebook logo"
            className={imgClassName}
            height={44}
            width={44}
          />
        );
      case "snapchat":
        return (
          <img
            src={assets.logo.snapchat}
            alt="snapchat logo"
            className={imgClassName}
            height={44}
            width={44}
          />
        );
      case "tiktok":
        return (
          <img
            src={assets.logo.tiktok}
            alt="tiktok logo"
            className={imgClassName}
            height={44}
            width={44}
          />
        );
    }
  }, [source]);

  return sourceLogo;
};
export default memo(PostsItemOwnerInfo);
