import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductorDetailComponent } from './productor-detail.component';

describe('ProductorDetailComponent', () => {
  let component: ProductorDetailComponent;
  let fixture: ComponentFixture<ProductorDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductorDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
