import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanastaUpdateComponent } from './canasta-update.component';

describe('CanastaUpdateComponent', () => {
  let component: CanastaUpdateComponent;
  let fixture: ComponentFixture<CanastaUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanastaUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanastaUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
