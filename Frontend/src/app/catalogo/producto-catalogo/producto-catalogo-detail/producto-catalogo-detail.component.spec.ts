import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoCatalogoDetailComponent } from './producto-catalogo-detail.component';

describe('ProductoCatalogoDetailComponent', () => {
  let component: ProductoCatalogoDetailComponent;
  let fixture: ComponentFixture<ProductoCatalogoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoCatalogoDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoCatalogoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
