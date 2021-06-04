import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductorPostulanteListComponent } from './productor-postulante-list.component';

describe('ProductorPostulanteComponent', () => {
  let component:ProductorPostulanteListComponent;
  let fixture: ComponentFixture<ProductorPostulanteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductorPostulanteListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductorPostulanteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});