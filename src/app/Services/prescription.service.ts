import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {

  constructor(private http: HttpClient) { }

  public GetAllPrescriptions(id: number): any {
    return this.http.get("https://petzeyappointmentsapi20221013201504.azurewebsites.net/api/prescription/pet/" + id);
  }

  public GetRecentPrescription(id: number): any {
    return this.http.get("https://petzeyappointmentsapi20221013201504.azurewebsites.net/api/prescription/pet/recent?id=" + id);
  }



}
