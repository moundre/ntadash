import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './Accueil/accueil/accueil.component';
import { AjoutAdminComponent } from './GestionAdmin/ajout-admin/ajout-admin.component';
import { ListeAdminComponent } from './GestionAdmin/liste-admin/liste-admin.component';
import { LoginComponent } from './Login/login/login/login.component';


const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'accueil', component:AccueilComponent},
  {path:'listeadmin', component:ListeAdminComponent},
  {path:'ajoutadmin', component:AjoutAdminComponent},
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
