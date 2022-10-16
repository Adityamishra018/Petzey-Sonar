
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentGridViewPetComponent } from '../appointment-grid-view-pet/appointment-grid-view-pet.component';
import { AppointmentGridViewVetComponent } from '../appointment-grid-view-vet/appointment-grid-view-vet.component';


@Component({
  selector: 'all-appointments',
  templateUrl: './all-appointment.component.html',
  styleUrls: ['./all-appointment.component.scss'],
})
export class AllAppointmentComponent implements OnInit {

  public calendar: boolean = false;
  public url: string;
  public filterValue: string;
  @ViewChild(AppointmentGridViewVetComponent) vetChild: AppointmentGridViewVetComponent;
  @ViewChild(AppointmentGridViewPetComponent) petChild: AppointmentGridViewPetComponent;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.url = this.router.url;
    this.url = this.url.split("/").splice(-1)[0];
    console.log(this.url);
  }

  toggleCalendar(value: boolean) {
    this.calendar = value;
  }

  filter(value) {
    this.filterValue = value;
    if (this.url == 'allAppointmentDoctor') {
      this.filterVet();
    }
    else {
      this.filterPet();
    }
  }

  filterVet() {
    this.vetChild.filterAppointments(this.filterValue);
  }

  filterPet() {
    this.petChild.filterAppointments(this.filterValue);
  }

}
