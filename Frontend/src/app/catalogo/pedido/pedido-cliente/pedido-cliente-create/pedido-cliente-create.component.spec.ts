import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoClienteCreateComponent } from './pedido-cliente-create.component';

describe('PedidoClienteCreateComponent', () => {
  let component: PedidoClienteCreateComponent;
  let fixture: ComponentFixture<PedidoClienteCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidoClienteCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoClienteCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
