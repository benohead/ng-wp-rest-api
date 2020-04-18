import { BasePost } from './base-post';

export interface Post extends BasePost {
  comment_status?: string;
  sticky?: boolean;
  categories?: any[];
  tags?: any[];
}
