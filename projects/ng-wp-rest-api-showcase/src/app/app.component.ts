import { Component } from '@angular/core';
import { Post, PostsService } from 'ng-wp-rest-api';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-wp-rest-api-showcase';
  posts$: Observable<Post[]>;

  constructor(private posts: PostsService) {
    this.posts$ = this.posts.list();
  }
}
