import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoClienteUpdateComponent } from './pedido-cliente-update.component';

describe('PedidoClienteUpdateComponent', () => {
  let component: PedidoClienteUpdateComponent;
  let fixture: ComponentFixture<PedidoClienteUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidoClienteUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoClienteUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
