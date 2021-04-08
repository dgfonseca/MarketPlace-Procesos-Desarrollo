import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoProductorDetailComponent } from './pedido-productor-detail.component';

describe('PedidoProductorDetailComponent', () => {
  let component: PedidoProductorDetailComponent;
  let fixture: ComponentFixture<PedidoProductorDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidoProductorDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoProductorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
