export interface BaseMedia {
  src: string;
  alt: string;
}

export interface ImageMedia extends BaseMedia {
  type: 'image';
}

export interface VideoMedia extends BaseMedia {
  type: 'video';
}

export type Media = ImageMedia | VideoMedia;

export interface ContentItem {
  title: string;
  description: string;
  media: Media[];
}