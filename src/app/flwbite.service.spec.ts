import { TestBed } from '@angular/core/testing';

import { FlwbiteService } from './flwbite.service';

describe('FlwbiteService', () => {
  let service: FlwbiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlwbiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
