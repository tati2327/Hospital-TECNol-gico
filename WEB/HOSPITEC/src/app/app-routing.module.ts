import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/sharedComponents/login/login.component';
import { SalonComponent } from './components/adminView/salon/salon.component';
import { MedicalEquipmentComponent } from './components/adminView/medical-equipment/medical-equipment.component';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/sharedComponents/homepage/homepage.component';


const routes: Routes = [
  {path: '', component:HomepageComponent},
  {path: 'login', component:LoginComponent},
  {path: 'salon', component: SalonComponent},
  {path: 'medical-equipment', component: MedicalEquipmentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
