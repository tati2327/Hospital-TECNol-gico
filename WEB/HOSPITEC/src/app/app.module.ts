import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalonComponent } from './components/adminView/salon/salon.component';
import { MedicalEquipmentComponent } from './components/adminView/medical-equipment/medical-equipment.component';
import { FooterComponent } from './components/sharedComponents/footer/footer.component';
import { LoginComponent } from './components/sharedComponents/login/login.component';
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

@NgModule({
  declarations: [
    AppComponent,
    SalonComponent,
    MedicalEquipmentComponent,
    FooterComponent,
    LoginComponent,
    NavComponent,
    HomepageComponent,
    PacienteComponent,
    ReservacionComponent,
    HistorialClinicoComponent,
    EvaluacionServicioComponent,
    CrearComponent,
    ModificarComponent,
    CrearReservacionComponent,
    ModificarReservacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
