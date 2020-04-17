import { Observable } from 'rxjs';
import { Post } from '../models/post';

export interface Posts {
  list(options?: any): Observable<Post[]>;
  get(id: number, options?: any): Observable<Post>;
  create(post: Post, options?: any): Observable<Post>;
  update(post: Post, options?: any): Observable<Post>;
  delete(id: number, options?: any): Observable<Post>;
}
