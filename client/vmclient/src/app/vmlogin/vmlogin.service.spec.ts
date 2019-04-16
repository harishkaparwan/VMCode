import { TestBed } from '@angular/core/testing';

import { VmloginService } from './vmlogin.service';

describe('VmloginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VmloginService = TestBed.get(VmloginService);
    expect(service).toBeTruthy();
  });
});
