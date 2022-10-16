

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../Models/VetContact';
import { VetProfile } from '../Models/vetProfile.model';
import { VetService } from '../Services/vet.service';

@Component({
  selector: 'app-vet-profile',
  templateUrl: './vet-profile.component.html',
  styleUrls: ['./vet-profile.component.scss']
})
export class VetProfileComponent {
  openDialog(id: number) {
    console.log("id", id);
    this.router.navigate(["vetdialog", id]);
  }

  public curVet: VetProfile = null;

  public allPets = new Array();

  constructor(private vetService: VetService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {

    this.vetService.GetVetEmail("dareen25@gmail.com").subscribe((x) => {

      let data = x[0];
      this.curVet = new VetProfile(data.DoctorID, data.DoctorName, data.Speciality, data.NPI, new Contact(data.DoctorID, data.Mobile, data.Email, data.Clinic));
      console.log(this.curVet);
    });

    // petId: Number;
    // petName: string;
    // gender: string;
    // dob: Date;
    // bloodGroup : string;
    // species : string;
    // breed : string;
    // image_url : string;
  }


}

