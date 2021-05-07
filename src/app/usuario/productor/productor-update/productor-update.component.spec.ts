import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductorUpdateComponent } from './productor-update.component';

describe('ProductorUpdateComponent', () => {
  let component: ProductorUpdateComponent;
  let fixture: ComponentFixture<ProductorUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductorUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductorUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
