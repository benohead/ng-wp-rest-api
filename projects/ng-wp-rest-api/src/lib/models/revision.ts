import { Base } from './base';

export interface Revision extends Base {
  date?: string;
  date_gmt?: string;
  guid?: any;
  id?: number;
  modified?: string;
  modified_gmt?: string;
  parent?: number;
  slug?: string;
  title?: any;
  content?: any;
  author?: number;
  excerpt?: any;
}
