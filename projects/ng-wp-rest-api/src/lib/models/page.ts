import { BasePost } from './base-post';

export interface Page extends BasePost {
  generated_slug?: string;
  menu_order?: number;
  parent?: number;
  permalink_template?: string;
}
