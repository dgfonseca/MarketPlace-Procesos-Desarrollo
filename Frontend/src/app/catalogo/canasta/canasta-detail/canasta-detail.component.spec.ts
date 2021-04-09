import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanastaDetailComponent } from './canasta-detail.component';

describe('CanastaDetailComponent', () => {
  let component: CanastaDetailComponent;
  let fixture: ComponentFixture<CanastaDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanastaDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanastaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
