import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanastaListComponent } from './canasta-list.component';

describe('CanastaListComponent', () => {
  let component: CanastaListComponent;
  let fixture: ComponentFixture<CanastaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanastaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanastaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
