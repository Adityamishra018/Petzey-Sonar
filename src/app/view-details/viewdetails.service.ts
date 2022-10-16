import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppointmentDTO } from '../Models/AppointmentDTO.model';
import { VetProfile } from '../Models/vetProfile.model';

@Injectable({
  providedIn: 'root',
})
export class ViewDetailsService {
  constructor(private _http: HttpClient) { }

  GetAppointmentInfo(AppointmentId: number) {
    return this._http.get<any>(
      'https://petzeyappointmentsapi20221013201504.azurewebsites.net/api/appointment/' +
      AppointmentId
    );
  }

  GetPrescription(PrescriptionId: number) {
    return this._http.get(
      'https://petzeyappointmentsapi20221013201504.azurewebsites.net/api/prescription/' +
      PrescriptionId
    );
  }

  //Get PetId by  the appointment object and send this.PetId to pet info
  GetPetInfo(PetId: number) {
    return this._http.get<any>(
      'https://patientwebapi20221013165438.azurewebsites.net/api/pet/' + PetId
    );
  }

  //Get Doctor info by the this.doctorID ang use doctor api
  GetDoctorInfo(DoctorID: number) {
    return this._http.get<any>(
      'https://doctorflowuipetzy.azurewebsites.net/api/doctors/' + DoctorID
    );
  }

  GetOwnerInfo(OwnerID: number) {
    return this._http.get<any>(
      'https://patientwebapi20221013165438.azurewebsites.net/api/owner/' +
      OwnerID
    );
  }

  AddNewMedicine(medicine: any) {
    return this._http.put(
      'https://petzeyappointmentsapi20221013201504.azurewebsites.net/api/prescription/update',
      JSON.stringify(medicine),
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  }

  UpdateAppointment(updateStatus: any) {
    return this._http.put(
      'https://petzeyappointmentsapi20221013201504.azurewebsites.net/api/Appointment',
      JSON.stringify(updateStatus),
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  }
}
