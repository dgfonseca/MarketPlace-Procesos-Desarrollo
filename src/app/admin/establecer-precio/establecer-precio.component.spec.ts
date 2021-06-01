import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EstablecerPrecioComponent} from './establecer-precio.component';

describe('EstablecerPrecioComponent', () => {
  let component: EstablecerPrecioComponent;
  let fixture: ComponentFixture<EstablecerPrecioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EstablecerPrecioComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstablecerPrecioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
