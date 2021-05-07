import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanastaCreateComponent } from './canasta-create.component';

describe('CanastaCreateComponent', () => {
  let component: CanastaCreateComponent;
  let fixture: ComponentFixture<CanastaCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanastaCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanastaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
