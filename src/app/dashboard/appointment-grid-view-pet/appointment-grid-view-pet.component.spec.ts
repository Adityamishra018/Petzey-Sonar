import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentGridViewPetComponent } from './appointment-grid-view-pet.component';

describe('AppointmentGridViewPetComponent', () => {
  let component: AppointmentGridViewPetComponent;
  let fixture: ComponentFixture<AppointmentGridViewPetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppointmentGridViewPetComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AppointmentGridViewPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
