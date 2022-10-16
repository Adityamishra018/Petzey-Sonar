import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Pet } from '../Models/appointmentPet.model';
import { Vet } from '../Models/appointmentVet.model';

@Injectable({
  providedIn: 'root',
})
export class VetProfileService {

  constructor(private http: HttpClient) { }

  public GetVetEmail(email: string): any {

    console.log("https://doctorflowuipetzy.azurewebsites.net/api/doctors/email/" + email + "/");
    return this.http.get("https://doctorflowuipetzy.azurewebsites.net/api/doctors/email/" + email + "/");
  }

  public GetVetID(id: number): any {

    return this.http.get("https://doctorflowuipetzy.azurewebsites.net/api/doctors/" + id);
  }

  public GetAppointments(id: number): any {

    //get id from the doctor(we will doctor by emailID)
    return this.http.get("https://petzeyappointmentsapi20221012114803.azurewebsites.net/api/appointment/doctor/" + id);
  }

  public GetPet(id: number): any {
    return this.http.get("https://patientwebapi20221013165438.azurewebsites.net/api/pet/" + id);
  }

  public EditVet(data: any): Observable<any> {

    const headers = { 'content-type': 'application/json' };

    var vet = {
      "DoctorID": data.VetId,
      "DoctorName": data.doctor_name,
      "Speciality": data.doctor_speciality,
      "NPI": data.doctor_npi_no,
      "Mobile": data.ContactDetails.doctor_phone_number,
      "Email": data.ContactDetails.doctor_email_id,
      "Clinic": data.ContactDetails.doctor_ClinicAddress,
      "Image": null
    }

    const body = JSON.stringify(vet);
    return this.http.put("https://doctorflowuipetzy.azurewebsites.net/api/doctor", body, { 'headers': headers });
  }

  public GetOwner(id: number): Observable<any> {

    return this.http.get("https://patientwebapi20221012102238.azurewebsites.net/api/patient/owner/" + id);
  }


}
