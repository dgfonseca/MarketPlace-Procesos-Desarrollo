import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertaUpdateComponent } from './oferta-update.component';

describe('OfertaUpdateComponent', () => {
  let component: OfertaUpdateComponent;
  let fixture: ComponentFixture<OfertaUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfertaUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertaUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
