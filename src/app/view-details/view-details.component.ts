import { Component, Injectable, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ViewDetailsService } from './viewdetails.service';
import { AppointmentDTO } from '../Models/AppointmentDTO.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss'],
})
@Injectable({
  providedIn: 'root',
})
export class ViewDetailsComponent implements OnInit {
  appointment: any;
  DoctorInfo: any;
  PetInfo: any;
  OwnerInfo: any;
  displayButton: boolean = true;
  appointmentId: number;
  petId: number;
  PrescriptionInfo: any;
  constructor(
    private location: Location,
    private _viewservice: ViewDetailsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  ngOnInit() {
    this.appointmentId = parseInt(this.route.snapshot.params['id']);

    this.displayButton = true;
    this.getAppointmentInfo();
  }

  getAppointmentInfo() {
    this._viewservice
      .GetAppointmentInfo(this.appointmentId)
      .subscribe((result) => {
        this.appointment = result;
        // console.log(this.appointment);
        this.getDoctorInfo();
        this.getPrescription();
        this.getPetInfo();
        this.getOwnerInfo();
      });
  }
  //Appointment object will be passed to the view details page fetch owner id pet id and doctor id
  getDoctorInfo() {
    this._viewservice
      .GetDoctorInfo(this.appointment.DoctorId)
      .subscribe((doctor) => {
        this.DoctorInfo = doctor;
        console.log('sunil', this.DoctorInfo);
      });
  }

  getPetInfo() {
    this._viewservice.GetPetInfo(this.appointment.PetId).subscribe((pet) => {
      this.PetInfo = pet;
      console.log(this.PetInfo);
    });
  }
  getOwnerInfo() {
    this._viewservice
      .GetOwnerInfo(this.appointment.OwnerId)
      .subscribe((owner) => {
        this.OwnerInfo = owner;
        console.log(this.OwnerInfo);
      });
  }

  EditPrescription() {
    console.log('clicked');
    this.displayButton = false;

    console.log(this.displayButton);
  }
  addPrescription(id: number) {
    console.log('Hi');
    console.log(id);
    this.router.navigate(['addPrescription', id]);
  }
  getPrescription() {
    this._viewservice
      .GetPrescription(this.appointment.PrescriptionId)
      .subscribe((pres) => {
        this.PrescriptionInfo = pres;
        console.log('Prescription', this.PrescriptionInfo);
      });
  }

  CloseApp() {
    this.appointment.Status = 'Closed';

    this._viewservice
      .UpdateAppointment(this.appointment)
      .subscribe((res) => (this.appointment = res));

    this.navigateBack();
  }

  CancelApp() {
    this.appointment.Status = 'Cancelled';

    this._viewservice
      .UpdateAppointment(this.appointment)
      .subscribe((res) => (this.appointment = res));

    this.navigateBack();
  }
  navigateBack() {
    this.location.back();
  }
}
