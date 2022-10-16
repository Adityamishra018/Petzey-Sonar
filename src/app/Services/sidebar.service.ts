import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vet } from '../Models/appointmentVet.model';

@Injectable({
  providedIn: 'root',
})
export class SideBarService {
  doctor: Vet;
  visible: boolean;
  constructor(private http: HttpClient) { this.visible = false; }

  hidesidebar() { this.visible = false; }
  showsidebar() { this.visible = true; }

}
