import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Pet } from '../Models/appointmentPet.model';
import { PetParent } from '../Models/appointmentPetParent.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient, private Router: Router) {
  }

  public GetAppointmentsByDoctor(id: number): any {
    return this.http.get("https://petzeyappointmentsapi20221013201504.azurewebsites.net/api/appointment/doctor/" + id);
  }


  public GetAppointmentsByOwner(id: number): any {
    //get id from the doctor(we will doctor by emailID)
    return this.http.get("https://petzeyappointmentsapi20221013201504.azurewebsites.net/api/appointment/owner/" + id);
  }


  public GetAppointmentsByPet(id: number): any {
    return this.http.get("https://petzeyappointmentsapi20221013201504.azurewebsites.net/api/appointment/pet/" + id);
  }

  GetAllOwners(){
    return this.http.get<PetParent[]>("https://patientwebapi20221013165438.azurewebsites.net/api/Owner")
  }

  GetAllPetsById(id : number){
    return this.http.get<Pet[]>("https://patientwebapi20221013165438.azurewebsites.net/api/allpetsbyid/"+id)
  }

  AddAppointment(body){
    this.http.post("https://petzeyappointmentsapi20221013201504.azurewebsites.net/api/Appointment",JSON.stringify(body),{
      headers : { 'Content-Type': 'application/json', 'Accept': 'application/json','Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type' }
    }).subscribe((res:any)=>{
      this.Router.navigate([`viewdetails/${res.AppointmentId}`])
    }, (err) => {
      alert("Failed")
    })
  }
}
