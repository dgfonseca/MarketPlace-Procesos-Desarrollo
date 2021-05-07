import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoClienteDetailComponent } from './pedido-cliente-detail.component';

describe('PedidoClienteDetailComponent', () => {
  let component: PedidoClienteDetailComponent;
  let fixture: ComponentFixture<PedidoClienteDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidoClienteDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoClienteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
