# Angular WordPress Rest API

## Installation

To install this library, run:

```bash
$ npm install ng-wp-rest-api --save
```

and then from your Angular `AppModule`:

```typescript
...
// Import the module and the posts service from the library
import { NgWpRestApiModule, PostsService } from 'ng-wp-rest-api';
...

@NgModule({
...
  imports: [
...
    // Specify the library module as an import
    NgWpRestApiModule,
...
  ],
  providers: [
...
    // Define the base URL of your WordPress REST API
    { provide: 'wpApiBaseUrl', useValue: 'https://techcrunch.com/wp-json' },
    // And make the Posts service available to your application
    PostsService,
...
  ],
...
})
export class AppModule { }
```

Once the library is imported, you can use its services in your Angular application e.g.:

```typescript
...
import { Post, PostsService } from 'ng-wp-rest-api';
...
@Component({
...
})
export class AppComponent {
...
  posts$: Observable<Post[]>;
...

  constructor(private posts: PostsService) {
...
    this.posts$ = this.posts.list();
...
  }
}
```

And display posts in your views e.g.:

```html
<h1>TechCrunch</h1>
<div class="articles_wrapper">
  <div class="articles">
    <article *ngFor="let post of posts$ | async">
      <header>
        <h2>
          <a class="post-block__title__link" [innerHTML]="post.title.rendered"></a>
        </h2>
        <div class="post-block__meta">
          <div class="river-byline">
            <span class="river-byline__authors">
              <span>
                <a href="{{ post.author_link }}">{{ post.author_name }}</a>
              </span>
            </span>
            <div class="river-byline__full-date-time__wrapper">
              <time class="river-byline__full-date-time">{{ post.date | date: "medium" }}</time>
            </div>
          </div>
        </div>
      </header>
      <div class="post-block__content">
        <p [innerHTML]="post.excerpt.rendered"></p>
      </div>
      <footer class="post-block__footer">
        <figure class="post-block__media">
          <picture>
            <img alt="" sizes="(max-width: 430px) 100vw, 430px"
              src="{{ post.featuredmedia_medium_source_url }}" />
          </picture>
        </figure>
      </footer>
    </article>
  </div>
</div>
```

## License

MIT © [<%= props.author.name %>](mailto:<%= props.author.email %>)
