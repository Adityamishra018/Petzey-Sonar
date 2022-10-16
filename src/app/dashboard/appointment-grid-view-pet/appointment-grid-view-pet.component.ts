import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentService } from 'src/app/Services/appointment.service';
import { PetService } from 'src/app/Services/pet.service';
import { VetService } from 'src/app/Services/vet.service';
@Component({
  selector: 'app-appointmentgridviewpet',
  templateUrl: './appointment-grid-view-pet.component.html',
  styleUrls: ['./appointment-grid-view-pet.component.scss'],
})
export class AppointmentGridViewPetComponent implements OnInit {
  router: any;
  allAppointments = [];
  filteredAppointments = [];
  allPets: any = [];
  allVets: any = [];

  constructor(
    private appointmentService: AppointmentService,
    private petService: PetService,
    private vetService: VetService,
    private Router: Router
  ) { }

  ngOnInit(): void {

    this.appointmentService.GetAppointmentsByOwner(1).subscribe((data: any) => {
      this.allAppointments = data;
      this.filteredAppointments = data;
      this.allAppointments.forEach(appointment => {
        this.petService.GetPet(appointment.PetId).subscribe((pet: any) => this.allPets[appointment.AppointmentId] = pet);
        this.vetService.GetVet(appointment.DoctorId).subscribe((vet: any) => this.allVets[appointment.AppointmentId] = vet);
      });
      console.log(this.allAppointments);
      console.log(this.allPets);
      console.log(this.allVets);
    });
  }
  viewDetail(id: number) {
    this.Router.navigate(['viewdetails', id]);
  }

  filterAppointments(filterValue) {
    if (filterValue == "All") {
      this.filteredAppointments = this.allAppointments;
    }
    else {
      this.filteredAppointments = this.allAppointments.filter(appointment => appointment.Status == filterValue);
    }
  }

}
