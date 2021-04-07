import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoCatalogoListComponent } from './producto-catalogo-list.component';

describe('ProductoCatalogoListComponent', () => {
  let component: ProductoCatalogoListComponent;
  let fixture: ComponentFixture<ProductoCatalogoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoCatalogoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoCatalogoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
