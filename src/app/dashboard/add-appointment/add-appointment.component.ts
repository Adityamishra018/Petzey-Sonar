import { Component, OnInit } from '@angular/core';
import { AppointmentDTO } from 'src/app/Models/AppointmentDTO.model';
import { Router } from '@angular/router';
import { AppointmentService } from '../../Services/appointment.service';
import { Pet } from '../../Models/appointmentPet.model';
import { PetParent } from '../../Models/appointmentPetParent.model';

import { PetService } from 'src/app/Services/pet.service';
import { OwnerService } from 'src/app/Services/owner.service';


@Component({
  selector: 'add-appointments',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.scss'],
})

export class AddAppointmentsComponent implements OnInit {

  appointmentDTO: AppointmentDTO = new AppointmentDTO(1,17,5,9,"","","confirmed",new Date(),0);
  owners : PetParent[] = [];
  pets : Pet[] = [];
  timePicked :any = 0;
  selectedPetName;
  selectedOwnerName;

  constructor(private router: Router, private appointmentService: AppointmentService, private petService: PetService, private ownerService: OwnerService) {
  }

  ngOnInit(): void {
    document.getElementById("mymodal").style.display = "none" 
    this.appointmentService.GetAllOwners().subscribe(
      (list) =>{
        for(let l of list){
          this.owners.push(l)
        }
      }
    )
    this.updatePetsBox()
  }

  setTime($event) {
    this.timePicked = $event.path[0].id;
    this.appointmentDTO.Date.setHours(this.timePicked ,0,0,0);
  }

  updatePetsBox() {
    this.petService.GetAllPetsById(this.appointmentDTO.ownerId).subscribe((list) => {
      this.pets = []
      for(let l of list){
        this.pets.push(l)
      }
    })
  }

  submit(e) {
    this.appointmentService.AddAppointment(this.appointmentDTO);
  }

  submitForm() {
    document.forms["myform"].submit();
  }

  dashboard() {
    console.log("called");
    this.router.navigate(['dashboard'])
  }

  openModal() {
    document.getElementById("mymodal").style.display = "block"
    document.getElementById("overlay").classList.add("active")
  }

  closeModal() {
    document.getElementById("mymodal").style.display = "none"
    document.getElementById("overlay").classList.remove("active")
  }
}
