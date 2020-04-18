import { Component } from '@angular/core';
import { Post, PostsService } from 'ng-wp-rest-api';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-wp-rest-api-showcase';
  posts$: Observable<Post[]>;
  public showContent: boolean;

  constructor(private posts: PostsService) {
    this.posts$ = this.posts.list({
      params: {
        per_page: '9',
        _embed: 'author,wp:featuredmedia'
      },
    });
  }

  public onShowContentChanged(value: boolean) {
    this.showContent = value;
  }

  getFeaturedImage(post: any) {
    const featuredmedia = post._embedded['wp:featuredmedia'];
    if (featuredmedia && featuredmedia.length > 0) {
      if (featuredmedia[0].media_details.sizes.medium) {
        return featuredmedia[0].media_details.sizes.medium.source_url;
      } else if (featuredmedia[0].media_details.sizes.featured) {
        return featuredmedia[0].media_details.sizes.featured.source_url;
      } else if (featuredmedia[0].media_details.sizes.thumbnail) {
        return featuredmedia[0].media_details.sizes.thumbnail.source_url;
      }
    }
    return false;
  }
}
