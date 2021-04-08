import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductorCreateComponent } from './productor-create.component';

describe('ProductorCreateComponent', () => {
  let component: ProductorCreateComponent;
  let fixture: ComponentFixture<ProductorCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductorCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductorCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
