import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Posts } from './posts';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService implements Posts {

  constructor(private http: HttpClient) { }

  list(options = {}): Observable<Post[]> {
    options = { params: { _embed: 'author,wp:featuredmedia', ...options } };
    return this.http.get<Post[]>(`posts`, options)
      .pipe(
        map<Post[], Post[]>(posts => {
          return posts.map<Post>(post => {
            return {
              ...post,
              authors: post._embedded.author,
              featuredmedia: post._embedded['wp:featuredmedia'],
              author_name: post._embedded.author?.[0].name,
              author_link: post._embedded.author?.[0].link,
              featuredmedia_medium_source_url: post._embedded['wp:featuredmedia']?.[0].media_details.sizes.medium?.source_url,
              featuredmedia_large_source_url: post._embedded['wp:featuredmedia']?.[0].media_details.sizes.large?.source_url,
              featuredmedia_thumbnail_source_url: post._embedded['wp:featuredmedia']?.[0].media_details.sizes.thumbnail?.source_url,
              featuredmedia_full_source_url: post._embedded['wp:featuredmedia']?.[0].media_details.sizes.full?.source_url
            };
          });
        })
      );
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
