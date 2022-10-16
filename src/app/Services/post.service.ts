import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://patientwebapi20221013165438.azurewebsites.net/api/owner';
  private petUrl = 'https://patientwebapi20221013165438.azurewebsites.net/api/pet';
  constructor(private httpClient: HttpClient) { }

  getPosts() {
    return this.httpClient.get(this.url);
  }
  getPets() {
    return this.httpClient.get(this.petUrl);
  }
  public EditOwner(data: any): Observable<any> {



    const headers = { 'content-type': 'application/json' };



    var vet = {

      "OwnerId": data.OwnerId,
      "Name": data.Name,

      "MobileNo": data.MobileNo,

      "Location": data.Location,
    }




    const body = JSON.stringify(vet);

    return this.httpClient.put("https://patientwebapi20221013165438.azurewebsites.net/api/Owner", body, { 'headers': headers });

  }



  public EditPet(data: any): Observable<any> {

    const headers = { 'content-type': 'application/json' };
    var Pet = {

      "PetId": data.PetId,

      "PetName": data.PetName,
      "BloodGroup": data.BloodGroup,
      "Breed": data.Breed,
      "ImageUrl": data.ImageUrl,
      "DOB": data.DOB,


    }

    const body = JSON.stringify(Pet);
    console.log(Pet);

    return this.httpClient.put("https://patientwebapi20221013165438.azurewebsites.net/api/pet", body, { 'headers': headers });

  }

}
