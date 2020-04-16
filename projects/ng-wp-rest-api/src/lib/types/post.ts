export interface Post {
  date?: string;
  date_gmt?: string;
  guid?: any;
  id?: number;
  link?: string;
  modified?: string;
  modified_gmt?: string;
  slug?: string;
  status?: string;
  type?: string;
  password?: string;
  title?: any;
  content?: any;
  author?: number;
  excerpt?: any;
  featured_media?: number;
  comment_status?: string;
  ping_status?: string;
  meta?: any;
  sticky?: boolean;
  template?: string;
  categories?: any[];
  tags?: any[];
}
