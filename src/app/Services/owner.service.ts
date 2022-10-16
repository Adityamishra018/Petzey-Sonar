import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  constructor(private http: HttpClient) { }

  public GetOwner(id: number): any {
    return this.http.get("https://patientwebapi20221013165438.azurewebsites.net/api/owner/" + id);
  }

  GetAllOwners() {
    return this.http.get<any>("https://patientwebapi20221013165438.azurewebsites.net/api/Owner")
  }
}
