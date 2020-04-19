import { Base } from './base';

export interface BasePost extends Base {
  author?: number;
  comment_status?: string;
  content?: any;
  date?: string;
  date_gmt?: string;
  excerpt?: any;
  featured_media?: number;
  guid?: any;
  id?: number;
  link?: string;
  meta?: any;
  modified?: string;
  modified_gmt?: string;
  password?: string;
  ping_status?: string;
  slug?: string;
  status?: string;
  template?: string;
  title?: any;
  type?: string;

  // shortcut properties filled from embedded data
  authors?: [any];
  featuredmedia?: [any];
  author_name?: string;
  author_link?: string;
  featuredmedia_medium_source_url?: string;
  featuredmedia_large_source_url?: string;
  featuredmedia_thumbnail_source_url?: string;
  featuredmedia_full_source_url?: string;
}
