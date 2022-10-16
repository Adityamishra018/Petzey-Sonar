import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AllPetsVetsComponent } from './dashboard/all-pets-vets/all-pets-vets.component';
import { LoginComponent } from './login/login.component';
import { PetparentProfileComponent } from './petparent-profile/petparent-profile.component';
import { VetDialogComponent } from './vet-profile/vet-dialog/vet-dialog.component';
import { VetProfileComponent } from './vet-profile/vet-profile.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { AddPrescriptionComponent } from './view-details/addprescription/addprescription.component';
import { EditownerComponent } from './petparent-profile/editowner/editowner.component';
import { EditpetComponent } from './petparent-profile/editpet/editpet.component';

const routes: Routes = [
  { path: '', redirectTo: './landing', pathMatch: 'full' },


  { path: 'login', component: LoginComponent },
  {
    path: 'landing',
    loadChildren: () =>
      import('./landing-screen/landing-screen.module').then((m) => m.LandingScreenModule),
  },
  // {
  //   path: 'login',
  //   component: LoginComponent,
  // },
  // { path: 'signup', component: SignupComponent },
  { path: 'allPets', component: AllPetsVetsComponent },
  { path: 'petparentprofile', component: PetparentProfileComponent },
  { path: 'vetprofile', component: VetProfileComponent, children: [] },
  { path: 'vetdialog/:id', component: VetDialogComponent },
  { path: 'EditOwner', component: EditownerComponent },
  { path: 'EditPet', component: EditpetComponent },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  { path: 'viewdetails/:id', component: ViewDetailsComponent },
  { path: 'addPrescription/:id', component: AddPrescriptionComponent },
  { path: '**', redirectTo: './landing', pathMatch: 'full' }
];

const config: ExtraOptions = {
  useHash: false
}

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
