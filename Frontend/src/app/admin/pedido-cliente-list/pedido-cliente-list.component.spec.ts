import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoClienteListComponent } from './pedido-cliente-list.component';

describe('PedidoClienteListComponent', () => {
  let component: PedidoClienteListComponent;
  let fixture: ComponentFixture<PedidoClienteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidoClienteListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoClienteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
