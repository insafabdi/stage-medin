import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PrisedesrendezVousComponent } from './prisedesrendez-vous/prisedesrendez-vous.component';
import { ListedesrendezVousComponent} from './listedesrendez-vous/listedesrendez-vous.component';
import { ListedesdocteursComponent } from './listedesdocteurs/listedesdocteurs.component';
import { DialogExpComponent } from './dialog-exp/dialog-exp.component';
import { SpecialitesComponent } from './specialites/specialites.component';
import { ListPatientComponent } from './list-patient/list-patient.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ListedesdocteursComponent ,
    DialogExpComponent,
    ListedesrendezVousComponent,
    PrisedesrendezVousComponent,
    SpecialitesComponent,
    ListPatientComponent

  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule ,
    MatIconModule,
    MatRadioModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSnackBarModule



  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
