import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewDetailsService } from '../viewdetails.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-addprescription',
  templateUrl: './addprescription.component.html',
  styleUrls: ['./addprescription.component.scss']
})
export class AddPrescriptionComponent implements OnInit {

  prescriptionId: number;
  prescription: any;
  constructor(private route: ActivatedRoute, private _viewService: ViewDetailsService, private location: Location, private router: Router) { }

  ngOnInit(): void {
    this.prescriptionId = parseInt(this.route.snapshot.params['id']);
    console.log(this.prescriptionId)

  }

  AddMedicine(data) {
    console.log("clicked");
    if (data != null) {
      this._viewService.GetPrescription(this.prescriptionId).subscribe((result => {
        this.prescription = result
        data = { ...data, Id: 9999 };
        this.prescription.Medicines.push(data);
        this._viewService.AddNewMedicine(this.prescription).subscribe((data) => { console.log(data) })
      }))
      this.location.back();
    }
  }
  NavigateBack() {

    window.history.back()
  }
}
