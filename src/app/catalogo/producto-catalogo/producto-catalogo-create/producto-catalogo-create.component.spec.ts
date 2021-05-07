import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoCatalogoCreateComponent } from './producto-catalogo-create.component';

describe('ProductoCatalogoCreateComponent', () => {
  let component: ProductoCatalogoCreateComponent;
  let fixture: ComponentFixture<ProductoCatalogoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoCatalogoCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoCatalogoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
