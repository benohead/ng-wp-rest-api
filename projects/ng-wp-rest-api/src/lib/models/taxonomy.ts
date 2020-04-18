import { Base } from './base';

export interface Taxonomy extends Base {
  capabilities?: any;
  description?: string;
  hierarchical?: boolean;
  labels?: any;
  name?: string;
  slug?: string;
  show_cloud?: boolean;
  types?: any[];
  rest_base?: string;
  visibility?: any;
}
