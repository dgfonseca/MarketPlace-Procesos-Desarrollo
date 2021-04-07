import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertaCreateComponent } from './oferta-create.component';

describe('OfertaCreateComponent', () => {
  let component: OfertaCreateComponent;
  let fixture: ComponentFixture<OfertaCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfertaCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
