import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Posts } from './posts';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService implements Posts {

  constructor(private http: HttpClient) { }

  list(options = {}): Observable<Post[]> {
    return this.http.get<Post[]>(`posts`, options);
  }

  get(id: number, options = {}): Observable<Post> {
    return this.http.get<Post>('posts/' + id, options);
  }

  create(post: Post, options = {}): Observable<Post> {
    return this.http.post<Post>('posts', post, { withCredentials: true, ...options });
  }

  update(post: Post, options = {}): Observable<Post> {
    return this.http.post<Post>('posts/' + post.id, post, { withCredentials: true, ...options });
  }

  delete(id: number, options = {}): Observable<Post> {
    return this.http.delete<Post>('posts/' + id, options);
  }
}
