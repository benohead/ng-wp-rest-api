import { Base } from './base';

export interface Tag extends Base {
  id?: number;
  count?: number;
  description?: string;
  link?: string;
  name?: string;
  slug?: string;
  taxonomy?: string;
  meta?: any;
}
