import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductorPostulanteCreateComponent } from './productor-postulante-create.component';

describe('ProductorPostulanteComponent', () => {
  let component: ProductorPostulanteCreateComponent;
  let fixture: ComponentFixture<ProductorPostulanteCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductorPostulanteCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductorPostulanteCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});