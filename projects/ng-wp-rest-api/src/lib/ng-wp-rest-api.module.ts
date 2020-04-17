import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PostsService } from './services/posts.service';
import { BaseUrlInterceptor } from './utils/BaseUrlInterceptor';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule
  ],
  exports: [ ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BaseUrlInterceptor,
      multi: true,
    },
    PostsService
  ]
})
export class NgWpRestApiModule { }
