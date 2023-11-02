import { TestBed } from '@angular/core/testing';

import { LocalstorageManagmentService } from './localstorage-managment.service';

describe('LocalstorageManagmentService', () => {
  let service: LocalstorageManagmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalstorageManagmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
