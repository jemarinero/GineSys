import { TestBed, inject } from '@angular/core/testing';

import { OcupacionesService } from './ocupaciones.service';

describe('OcupacionesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OcupacionesService]
    });
  });

  it('should be created', inject([OcupacionesService], (service: OcupacionesService) => {
    expect(service).toBeTruthy();
  }));
});
