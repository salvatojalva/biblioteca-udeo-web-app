import { TestBed } from '@angular/core/testing';

import { ScaffoldHttpService } from './scaffold-http.service';

describe('ScaffoldHttpService', () => {
  let service: ScaffoldHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScaffoldHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
