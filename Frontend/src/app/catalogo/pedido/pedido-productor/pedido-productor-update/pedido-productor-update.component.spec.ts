import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoProductorUpdateComponent } from './pedido-productor-update.component';

describe('PedidoProductorUpdateComponent', () => {
  let component: PedidoProductorUpdateComponent;
  let fixture: ComponentFixture<PedidoProductorUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidoProductorUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoProductorUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
