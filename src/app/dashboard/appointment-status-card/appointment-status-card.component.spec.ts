import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentStatusCardComponent } from './appointment-status-card.component';

describe('AppointmentStatusCardComponent', () => {
  let component: AppointmentStatusCardComponent;
  let fixture: ComponentFixture<AppointmentStatusCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppointmentStatusCardComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AppointmentStatusCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
