import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WpPostsService {

  constructor(@Inject('wpApiBaseUrl') private wpBaseUrl: string,
              @Inject('wpApiNamespace') private wpApiNamespace: string) { }
}
