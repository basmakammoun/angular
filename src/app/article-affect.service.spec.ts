import { TestBed } from '@angular/core/testing';

import { ArticleAffectService } from './article-affect.service';

describe('ArticleAffectService', () => {
  let service: ArticleAffectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticleAffectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
