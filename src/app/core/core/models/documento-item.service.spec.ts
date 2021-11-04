import { TestBed } from '@angular/core/testing';

import { DocumentoItemService } from './documento-item.service';

describe('DocumentoItemService', () => {
  let service: DocumentoItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentoItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
