import { TestBed, inject } from '@angular/core/testing';

import { GhapiService } from './ghapi.service';

describe('GhapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GhapiService]
    });
  });

  it('should be created', inject([GhapiService], (service: GhapiService) => {
    expect(service).toBeTruthy();
  }));
});
