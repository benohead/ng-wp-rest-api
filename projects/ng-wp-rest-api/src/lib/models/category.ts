import { Base } from './base';

export interface Category extends Base {
  id?: number;
  count?: number;
  description?: string;
  link?: string;
  name?: string;
  slug?: string;
  taxonomy?: string;
  parent?: number;
  meta?: any;
}
