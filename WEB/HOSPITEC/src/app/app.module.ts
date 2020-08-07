import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from  '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
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
import { ProcedimientosMedicosComponent } from './components/adminView/procedimientos-medicos/procedimientos-medicos.component';
import { CrearProcedimientosComponent } from './components/adminView/procedimientos-medicos/crear-procedimientos/crear-procedimientos.component';
import { ModificarProcedimientosComponent } from './components/adminView/procedimientos-medicos/modificar-procedimientos/modificar-procedimientos.component';
import { PersonalComponent } from './components/adminView/personal/personal.component';
import { CrearPersonalComponent } from './components/adminView/personal/crear-personal/crear-personal.component';
import { ModificarPersonalComponent } from './components/adminView/personal/modificar-personal/modificar-personal.component';
import { ModificarDoctorComponent } from './components/doctor/gestion-paciente/modificar/modificar.component';
import { CamaComponent } from './components/adminView/cama/cama.component';
import { ModificarCamaComponent } from './components/adminView/cama/modificar-cama/modificar-cama.component';
import { LoginComponent } from './components/login/login.component';
import { environment } from 'src/environments/environment';
import { ModificarMedicalEquipmentComponent } from './components/adminView/medical-equipment/modificar-medical-equipment/modificar-medical-equipment.component';
import { ModificarSalonComponent } from './components/adminView/salon/modificar-salon/modificar-salon.component';

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
    HistorialMedicoComponent,
    ProcedimientosMedicosComponent,
    CrearProcedimientosComponent,
    ModificarProcedimientosComponent,
    PersonalComponent,
    CrearPersonalComponent,
    ModificarPersonalComponent,
    ModificarDoctorComponent,
    CamaComponent,
    ModificarCamaComponent,
    LoginComponent,
    ModificarMedicalEquipmentComponent,
    ModificarSalonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
