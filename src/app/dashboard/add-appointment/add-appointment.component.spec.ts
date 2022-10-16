import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAppointmentsComponent } from './add-appointment.component';

describe('AddAppointmentComponent', () => {
  let component: AddAppointmentsComponent;
  let fixture: ComponentFixture<AddAppointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddAppointmentsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AddAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
