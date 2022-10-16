import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Gender } from 'src/app/Models/gender.enum';
import { AppointmentService } from 'src/app/Services/appointment.service';
import { OwnerService } from 'src/app/Services/owner.service';
import { PetService } from 'src/app/Services/pet.service';

@Component({
  selector: 'app-appointmentgridviewvet',
  templateUrl: './appointment-grid-view-vet.component.html',
  styleUrls: ['./appointment-grid-view-vet.component.scss'],
})
export class AppointmentGridViewVetComponent implements OnInit {
  allAppointments = [];
  allPets = {};
  allPetOwners = {};
  allVets: any = [];
  filteredAppointments = [];

  constructor(private appointmentService: AppointmentService, private petService: PetService, private router: Router, private ownerService: OwnerService) {

  }

  ngOnInit(): void {

    this.appointmentService.GetAppointmentsByDoctor(11).subscribe((appointments: any) => {
      this.allAppointments = appointments;
      this.filteredAppointments = appointments;
      this.allAppointments.forEach(appointment => {
        this.petService.GetPet(appointment.PetId).subscribe((pet: any) => this.allPets[appointment.AppointmentId] = pet);
        this.ownerService.GetOwner(appointment.OwnerId).subscribe((owner: any) => this.allPetOwners[appointment.AppointmentId] = owner);
      });
      console.log(this.allAppointments);
      console.log(this.allPets);
      console.log(this.allPetOwners);
    });

  }
  viewDetail(id: number) {
    console.log(`viewdetails/${id}`)
    this.router.navigate([`viewdetails/${id}`]);
  }

  getGender(genderId) {
    return Gender[genderId];
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