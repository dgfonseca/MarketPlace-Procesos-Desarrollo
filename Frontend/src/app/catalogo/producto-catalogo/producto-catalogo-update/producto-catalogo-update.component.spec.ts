import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoCatalogoUpdateComponent } from './producto-catalogo-update.component';

describe('ProductoCatalogoUpdateComponent', () => {
  let component: ProductoCatalogoUpdateComponent;
  let fixture: ComponentFixture<ProductoCatalogoUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoCatalogoUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoCatalogoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
