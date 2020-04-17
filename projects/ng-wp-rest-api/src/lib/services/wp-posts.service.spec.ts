import { TestBed } from '@angular/core/testing';

import { WpPostsService } from './wp-posts.service';

describe('WpPostsService', () => {
  let service: WpPostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WpPostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
