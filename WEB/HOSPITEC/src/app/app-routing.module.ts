import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalonComponent } from './components/adminView/salon/salon.component';
import { MedicalEquipmentComponent } from './components/adminView/medical-equipment/medical-equipment.component';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/sharedComponents/homepage/homepage.component';
import { PacienteComponent } from './components/paciente/paciente/paciente.component';
import { EvaluacionServicioComponent } from './components/paciente/evaluacion-servicio/evaluacion-servicio.component';
import { HistorialClinicoComponent } from './components/paciente/historial-clinico/historial-clinico.component';
import { ReservacionComponent } from './components/paciente/reservacion/reservacion.component';
import { GestionPacienteComponent} from './components/doctor/gestion-paciente/gestion-paciente.component';
import { ProcedimientosMedicosComponent } from './components/adminView/procedimientos-medicos/procedimientos-medicos.component';
import { PersonalComponent} from './components/adminView/personal/personal.component';
import {HistorialMedicoComponent} from './components/doctor/historial-medico/historial-medico.component';

const routes: Routes = [
  {path: '', component:HomepageComponent},
  {path: 'salon', component: SalonComponent},
  { path: 'medical-equipment', component: MedicalEquipmentComponent },
  { path: 'paciente', component: PacienteComponent },
  { path: 'reservacion', component: ReservacionComponent },
  { path: 'historial', component: HistorialClinicoComponent },
  {path:'procedimientosMedicos',component:ProcedimientosMedicosComponent},
  { path: 'evaluacion', component: EvaluacionServicioComponent },
  {path: 'gestionPacientes', component:GestionPacienteComponent},
  {path: 'historialMedico', component:HistorialMedicoComponent},
  {path: 'personal', component: PersonalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
