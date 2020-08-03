import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalonComponent } from './components/adminView/salon/salon.component';
import { MedicalEquipmentComponent } from './components/adminView/medical-equipment/medical-equipment.component';
import { FooterComponent } from './components/sharedComponents/footer/footer.component';
import { NavComponent } from './components/sharedComponents/nav/nav.component';
import { HomepageComponent } from './components/sharedComponents/homepage/homepage.component';
import { PacienteComponent } from './components/paciente/paciente/paciente.component';
import { ReservacionComponent } from './components/paciente/reservacion/reservacion.component';
import { HistorialClinicoComponent } from './components/paciente/historial-clinico/historial-clinico.component';
import { EvaluacionServicioComponent } from './components/paciente/evaluacion-servicio/evaluacion-servicio.component';
import { CrearComponent } from './components/paciente/paciente/crear/crear.component';
import { ModificarComponent } from './components/paciente/paciente/modificar/modificar.component';
import { CrearReservacionComponent } from './components/paciente/reservacion/crear-reservacion/crear-reservacion.component';
import { ModificarReservacionComponent } from './components/paciente/reservacion/modificar-reservacion/modificar-reservacion.component';
import { GestionPacienteComponent } from './components/doctor/gestion-paciente/gestion-paciente.component';
import { HistorialMedicoComponent } from './components/doctor/historial-medico/historial-medico.component';

@NgModule({
  declarations: [
    AppComponent,
    SalonComponent,
    MedicalEquipmentComponent,
    FooterComponent,
    NavComponent,
    HomepageComponent,
    PacienteComponent,
    ReservacionComponent,
    HistorialClinicoComponent,
    EvaluacionServicioComponent,
    CrearComponent,
    ModificarComponent,
    CrearReservacionComponent,
    ModificarReservacionComponent,
    GestionPacienteComponent,
    HistorialMedicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
