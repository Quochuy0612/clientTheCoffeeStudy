import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupClassScheduleComponent } from './signup-class-schedule.component';

describe('SignupClassScheduleComponent', () => {
  let component: SignupClassScheduleComponent;
  let fixture: ComponentFixture<SignupClassScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupClassScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupClassScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
