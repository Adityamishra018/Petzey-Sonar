import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VetService {

  constructor(private http: HttpClient) { }

  public GetVetEmail(email: string): any {

    console.log("https://doctorflowuipetzy.azurewebsites.net/api/doctors/email/" + email + "/");
    return this.http.get("https://doctorflowuipetzy.azurewebsites.net/api/doctors/email/" + email + "/");
  }

  public GetVet(id: number): any {

    return this.http.get("https://doctorflowuipetzy.azurewebsites.net/api/doctors/" + id);
  }

  public EditVet(data: any): Observable<any> {

    const headers = { 'content-type': 'application/json' };

    let vet = {
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


}
