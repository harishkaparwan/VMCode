import { TestBed } from '@angular/core/testing';

import { VmregformService } from './vmregform.service';

describe('VmregformService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VmregformService = TestBed.get(VmregformService);
    expect(service).toBeTruthy();
  });
});
