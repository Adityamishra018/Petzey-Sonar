import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentGridViewVetComponent } from './appointment-grid-view-vet.component';

describe('AppointmentGridViewVetComponent', () => {
  let component: AppointmentGridViewVetComponent;
  let fixture: ComponentFixture<AppointmentGridViewVetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppointmentGridViewVetComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AppointmentGridViewVetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
