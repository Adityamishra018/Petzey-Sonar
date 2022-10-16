import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/Models/VetContact';
import { VetProfile } from 'src/app/Models/vetProfile.model';
import { VetService } from 'src/app/Services/vet.service';

@Component({
  selector: 'app-vet-dialog',
  templateUrl: './vet-dialog.component.html',
  styleUrls: ['./vet-dialog.component.scss']
})
export class VetDialogComponent {
  OnClick1() {
    throw new Error('Method not implemented.');
  }
  public curVet: VetProfile = null;
  constructor(private vetService: VetService, private Activeroute: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    let id: number = this.Activeroute.snapshot.params["id"];
    this.vetService.GetVet(id).subscribe((data) => {

      this.curVet = new VetProfile(id, data.DoctorName, data.Speciality, data.NPI, new Contact(data.DoctorID, data.Mobile, data.Email, data.Clinic));
      console.log(this.curVet.doctor_name);
    })
  }

  UpdateVet(data: any) {

    console.log(this.curVet);
    this.vetService.EditVet(this.curVet).subscribe((data) => {

      console.log(data);
      this.router.navigate(['vetprofile']);

    });



  }

}






