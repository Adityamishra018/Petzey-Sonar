import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPrescriptionComponent } from '../view-details/addprescription/addprescription.component';
import { ViewDetailsComponent } from '../view-details/view-details.component';
import { AddAppointmentsComponent } from './add-appointment/add-appointment.component';
import { AllAppointmentComponent } from './all-appointment/all-appointment.component';
import { PetparentProfileComponent } from '../petparent-profile/petparent-profile.component';

const routes: Routes = [
  { path: 'allAppointmentDoctor', component: AllAppointmentComponent },
  { path: 'allAppointmentPetOwner', component: AllAppointmentComponent },
  { path: 'addAppointmentForDoctor', component: AddAppointmentsComponent },
  { path: '', redirectTo: 'allAppointment', pathMatch: 'full' },
  { path: 'viewdetails', component: ViewDetailsComponent, children: [{ path: 'addPrescription', component: AddPrescriptionComponent }] },
  { path: 'ownerprofile', component: PetparentProfileComponent }
  ,
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }
