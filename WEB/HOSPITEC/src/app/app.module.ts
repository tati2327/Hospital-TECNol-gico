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

@NgModule({
  declarations: [
    AppComponent,
    SalonComponent,
    MedicalEquipmentComponent,
    FooterComponent,
    LoginComponent,
    NavComponent,
    HomepageComponent
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
