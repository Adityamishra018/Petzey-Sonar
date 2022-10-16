import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pet } from 'src/app/Models/appointmentPet.model';
import { Contact } from 'src/app/Models/VetContact';
import { VetProfile } from 'src/app/Models/vetProfile.model';
import { OwnerService } from 'src/app/Services/owner.service';
import { PetService } from 'src/app/Services/pet.service';
import { VetService } from 'src/app/Services/vet.service';
import { AppointmentService } from '../../Services/appointment.service';



@Component({
  selector: 'pets-vets',
  templateUrl: './all-pets-vets.component.html',
  styleUrls: ['./all-pets-vets.component.scss'],
})
export class AllPetsVetsComponent implements OnInit {
  role: string = 'vet';
  curVet: VetProfile = null;
  constructor(
    private vetService: VetService,
    private router: Router,
    private petService: PetService,
    private appointmentService: AppointmentService, private ownerService: OwnerService
  ) { }
  public AllPets: Array<Pet> = new Array<Pet>();
  public data: Array<any> = new Array<any>();
  public appointments: Array<any> = new Array<any>();
  public recentAppointments: Array<any> = new Array<any>();

  async ngOnInit(): Promise<any> {

    await this.vetService.GetVetEmail("dareen25@gmail.com").subscribe((x) => {

      let data = x[0];


      this.curVet = new VetProfile(data.DoctorID, data.DoctorName, data.Speciality, data.NPI, new Contact(data.DoctorID, data.Mobile, data.Email, data.Clinic));
      console.log("Vet", this.curVet);
      this.appointmentService.GetAppointmentsByDoctor(data.DoctorID).subscribe(async (x) => {

        let data = x[0];


        console.log("Total Appointments", x.length);

        for (let i = 0; i < x.length; i++) {

          let time = new Date(x[i].Date);
          console.log("Time", time);
          x[i].Date = new Date(x[i].Date);

          this.appointments.push(x[i]);


          //console.log(x[i]);
          let element = x[i];
          let petId: number = element.PetId;
          let ownerId: number = element.OwnerId;
          let pet: Pet = null;
          let ownerName: string;
          //console.log(petId);
          await this.petService.GetPet(petId).subscribe(async (p) => {



            pet = new Pet(p.PetId, p.Gender, p.PetName, p.BloodGroup, p.DOB, p.Allergies, p.Species, p.Breed, p.ImageUrl);
            //console.log("PET DETAILS", pet, ownerId);

            await this.ownerService.GetOwner(ownerId).subscribe(async (o) => {
              //console.log("Details", pet, o);
              let check = false;
              this.AllPets.forEach((p) => {
                if (p.PetId == pet.PetId) {
                  check = true;
                }
              });

              if (!check) {
                this.data.push({ "Owner": o, "Pet": pet, "Time": time });
                this.AllPets.push(pet);
              }

            });


            //console.log("owner ID",ownerId);
          });


        }
        console.log("app", this.appointments);
        this.appointments.sort(this.recentlyConsulted("Date"));
        this.appointments.forEach(element => {
          this.petService.GetPet(element.PetId).subscribe((petData) => {
            console.log("appointment data", element);
            console.log("pet data", petData);
            this.recentAppointments.push({ "appointment": element, "pet": petData });
          }
          );
        });


      });
      console.log(this.appointments);



      //this.appointments.sort((a, b) => a.Date - b.Date);

      console.log(this.recentAppointments);
    });
  }



  navigatePet(ownerId: number, petId: number) {
    console.log(ownerId, petId);
    this.router.navigate([`viewdetails/${petId}`]);
  }

  recentlyConsulted(prop) {
    return function (a, b) {
      if (a[prop] < b[prop]) {
        return 1;
      } else if (a[prop] > b[prop]) {
        return -1;
      }
      return 0;
    }
  }
}
