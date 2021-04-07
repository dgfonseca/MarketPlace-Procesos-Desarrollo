import { TestBed } from '@angular/core/testing';

import { ProductoCatalogoService } from './producto-catalogo.service';

describe('ProductoCatalogoService', () => {
  let service: ProductoCatalogoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductoCatalogoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
