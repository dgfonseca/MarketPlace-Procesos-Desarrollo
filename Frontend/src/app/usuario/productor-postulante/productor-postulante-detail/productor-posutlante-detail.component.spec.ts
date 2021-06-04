import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductorPostulanteDetailComponent } from './productor-posutlante-detail.component';

describe('ProductorPostulanteDetailComponent', () => {
  let component: ProductorPostulanteDetailComponent;
  let fixture: ComponentFixture<ProductorPostulanteDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductorPostulanteDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductorPostulanteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
