import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DialogExpComponent } from './dialog-exp/dialog-exp.component';
import { ListPatientComponent } from './list-patient/list-patient.component';
import { ListedesdocteursComponent } from './listedesdocteurs/listedesdocteurs.component';
import { ListedesrendezVousComponent } from './listedesrendez-vous/listedesrendez-vous.component';
import { LoginComponent } from './login/login.component';
import { PrisedesrendezVousComponent } from './prisedesrendez-vous/prisedesrendez-vous.component';
import { RegisterComponent } from './register/register.component';
import { SpecialitesComponent } from './specialites/specialites.component';
const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'listedesdocteurs',component:ListedesdocteursComponent},
  {path:'prisedesrendez-vous',component:PrisedesrendezVousComponent},
  {path:'listedesrendez-vous',component:ListedesrendezVousComponent},
  {path:'patientsList',component:ListPatientComponent},
  {path:'dialog-exp',component:DialogExpComponent},
  {path:'specialites',component:SpecialitesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
