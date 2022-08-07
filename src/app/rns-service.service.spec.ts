import { TestBed } from '@angular/core/testing';

import { RnsServiceService } from './rns-service.service';

describe('RnsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RnsServiceService = TestBed.get(RnsServiceService);
    expect(service).toBeTruthy();
  });
});
