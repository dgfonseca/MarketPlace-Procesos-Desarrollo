import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoProductorCreateComponent } from './pedido-productor-create.component';

describe('PedidoProductorCreateComponent', () => {
  let component: PedidoProductorCreateComponent;
  let fixture: ComponentFixture<PedidoProductorCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidoProductorCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoProductorCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
