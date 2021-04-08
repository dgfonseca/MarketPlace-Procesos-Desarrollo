import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoProductorListComponent } from './pedido-productor-list.component';

describe('PedidoProductorListComponent', () => {
  let component: PedidoProductorListComponent;
  let fixture: ComponentFixture<PedidoProductorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidoProductorListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoProductorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
