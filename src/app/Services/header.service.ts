import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vet } from '../Models/appointmentVet.model';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  doctor: Vet;
  visible: boolean;
  constructor(private http: HttpClient) { this.visible = false; }

  hideheader() { this.visible = false; }
  showheader() { this.visible = true; }

}
