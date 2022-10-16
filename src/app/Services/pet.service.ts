import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private http: HttpClient) { }

  public GetPet(id: number): any {
    return this.http.get("https://patientwebapi20221013165438.azurewebsites.net/api/pet/" + id);
  }

  GetAllPetsById(id: number) {
    return this.http.get<any>("https://patientwebapi20221013165438.azurewebsites.net/api/allpetsbyid/" + id)
  }


}
