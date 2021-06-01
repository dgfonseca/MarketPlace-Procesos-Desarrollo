import {TestBed} from '@angular/core/testing';

import {ProductorPostulanteService} from './productor-postulante.service';

describe('ProductorService', () => {
  let service: ProductorPostulanteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductorPostulanteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
