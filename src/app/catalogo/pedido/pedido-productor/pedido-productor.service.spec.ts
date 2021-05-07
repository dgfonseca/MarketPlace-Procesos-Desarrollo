import { TestBed } from '@angular/core/testing';

import { PedidoProductorService } from './pedido-productor.service';

describe('PedidoProductorService', () => {
  let service: PedidoProductorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PedidoProductorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
