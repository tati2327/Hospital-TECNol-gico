import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/sharedComponents/login/login.component';
import { SalonComponent } from './components/adminView/salon/salon.component';
import { MedicalEquipmentComponent } from './components/adminView/medical-equipment/medical-equipment.component';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/sharedComponents/homepage/homepage.component';
import { PacienteComponent } from './components/paciente/paciente/paciente.component';
import { EvaluacionServicioComponent } from './components/paciente/evaluacion-servicio/evaluacion-servicio.component';
import { HistorialClinicoComponent } from './components/paciente/historial-clinico/historial-clinico.component';
import { ReservacionComponent } from './components/paciente/reservacion/reservacion.component';



const routes: Routes = [
  {path: '', component:HomepageComponent},
  {path: 'login', component:LoginComponent},
  {path: 'salon', component: SalonComponent},
  { path: 'medical-equipment', component: MedicalEquipmentComponent },
  { path: 'paciente', component: PacienteComponent },
  { path: 'reservacion', component: ReservacionComponent },
  { path: 'historial', component: HistorialClinicoComponent },
  { path: 'evaluacion', component: EvaluacionServicioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
