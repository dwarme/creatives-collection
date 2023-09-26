export type IPostSource = "instagram" | "facebook" | "tiktok" | "snapchat";
export type IPostOwnerSource = IPostSource;
export type IPostProductType = "clips" | "story" | "feed"; //clips (IG reels and TIKTOK ), story (IG, FB & SNAPCHAT), feed (FB & IG)

export interface IPost {
    accessibilityCaption: string | null;
    caption: string;
    dimensions: {
        height: number;
        width: number;
    },
    id: string;
    source: IPostSource;
    isSponsored: boolean;
    isVideo: boolean;
    owner: IPostOwner;
    postedAt: number;
    productType: IPostProductType;
    thumbnailSrc: string | null;
    videoUrl: string | null;
    photoUrl: string | null;
    seenByViewer: boolean;
    ownerId: string;
    savedByViewer: boolean;
    ctaUrl: string | null;
    videoDuration: number | null;
}

export interface IPostOwner {
    id: string;
    username: string;
    fullName: string;
    isVerified: boolean;
    profilePictureUrl: string | null;
    source: IPostOwnerSource;
}