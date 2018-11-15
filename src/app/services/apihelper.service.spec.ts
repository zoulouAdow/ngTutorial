import { TestBed } from '@angular/core/testing';

import { APIHelperService } from './apihelper.service';

describe('APIHelperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: APIHelperService = TestBed.get(APIHelperService);
    expect(service).toBeTruthy();
  });
});
