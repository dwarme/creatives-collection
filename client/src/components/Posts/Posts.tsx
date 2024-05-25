import React, { Fragment, useRef } from "react";
import "./Posts.css";
import { IPost } from "../../types/posts";
import { createPortal } from "react-dom";
import PostModal from "../Modals/MediaBrowserPostModal/PostModal";
import PostsItem from "./PostsItem";
import ErrorBoundary from "../ErrorBoundary";
import FallbackErrorBoundaryPost from "../FallbaksErrorBoundary/FallbackErrorBoundaryPost";

const Posts: React.FC = () => {
  const refScrollContainer = useRef<HTMLDivElement>(null);
  const refModalPost = useRef<{
    open: (postData: IPost) => void;
  }>(null);

  const posts: IPost[] = [
    {
      accessibilityCaption:
        "A highly detailed, vibrant image of a lizard from close up against a stark black backdrop.",
      caption:
        "Commissioned by Apple. @oliviarodrigo’s “get him back!” music video shot on iPhone 15 Pro. An upgraded suite of pro features (including a 5x optical-quality zoom on iPhone 15 Pro Max) captured every side of Olivia on set. “For this video, we’re doing a lot of advanced camera moves to create energy. I was really impressed with the quality of the footage.” #ShotoniPhone15Pro by Jack Begert @jackbegert",
      dimensions: {
        height: 1920,
        width: 1080,
      },
      id: "3190400991740920793",
      source: "instagram",
      isSponsored: false,
      isVideo: true,
      owner: {
        id: "5821462185",
        username: "apple",
        fullName: "apple",
        isVerified: true,
        profilePictureUrl:
          "https://instagram.fmxp6-1.fna.fbcdn.net/v/t51.2885-19/20635165_1942203892713915_5464937638928580608_a.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fmxp6-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=zoP1V46L78sAX8UzgR7&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfBrELjix5xFvcfBz3ilnust5NOZJuwFRzEwgDTSS5mlfA&oe=650ED5DC&_nc_sid=ee9879",
        source: "instagram",
      },
      postedAt: 1694545531,
      productType: "clips", //clips (IG reels and TIKTOK ), story (IG, FB & SNAPCHAT), feed (FB & IG)
      thumbnailSrc:
        "https://instagram.fmxp6-1.fna.fbcdn.net/v/t51.2885-15/378091105_2237380243131898_4645459958875486417_n.jpg?stp=dst-jpg_e15&_nc_ht=instagram.fmxp6-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=KVdKLl4j7YUAX8IDfXH&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzE5MDQwMDk5MTc0MDkyMDc5Mw%3D%3D.2-ccb7-5&oh=00_AfDA4i7QFuWMy3gr0xeakhfNBP7eAdkkOk7C49FUqcDjwA&oe=650E5127&_nc_sid=ee9879",
      videoUrl:
        "https://scontent.cdninstagram.com/o1/v/t16/f1/m82/D14A2A00FC43F10B4226D6CB4BD033A7_video_dashinit.mp4?efg=eyJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSIsInZlbmNvZGVfdGFnIjoidnRzX3ZvZF91cmxnZW4uY2xpcHMuYzIuNzIwLmJhc2VsaW5lIn0&_nc_ht=instagram.ffco3-1.fna.fbcdn.net&_nc_cat=110&vs=783689986830177_359756425&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC9EMTRBMkEwMEZDNDNGMTBCNDIyNkQ2Q0I0QkQwMzNBN192aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dIT29DaGE3ODB2b1pmMENBTzRhcEx2b2JQUklicV9FQUFBRhUCAsgBACgAGAAbABUAACbA9eSZ1s7yPxUCKAJDMywXQEVAAAAAAAAYEmRhc2hfYmFzZWxpbmVfMV92MREAdf4HAA%3D%3D&ccb=9-4&oh=00_AYC_lNgeFQrW3POa39TFt8PvIxlAN3uPRROLDAzoCro2qg&oe=6653ECE0&_nc_sid=cf751b",
      photoUrl: null,
      seenByViewer: false,
      ownerId: "5821462185",
      savedByViewer: false,
      ctaUrl: null,
      videoDuration: 65.178,
    },
  ];

  const handleOpenPostModal = (postsIndex: number) => {
    refModalPost.current?.open(posts[postsIndex]);
  };

  return (
    <Fragment>
      <div className="row justify-content-center posts">
        <div ref={refScrollContainer} className="scroll-container">
          <ul className="item-container">
            <ErrorBoundary fallback={<FallbackErrorBoundaryPost />}>
              <PostsItem
                post={posts[0]}
                onOpenPostModal={() => handleOpenPostModal(0)}
              />
            </ErrorBoundary>
          </ul>
        </div>
      </div>
      {createPortal(<PostModal ref={refModalPost} />, document.body)}
    </Fragment>
  );
};

export default Posts;
