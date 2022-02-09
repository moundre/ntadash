import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AngularConfirmModalModule } from 'angular-confirm-modal';
import { AjoutAdminComponent } from './GestionAdmin/ajout-admin/ajout-admin.component';
import { ListeAdminComponent } from './GestionAdmin/liste-admin/liste-admin.component';
import { DetailsAdminComponent } from './GestionAdmin/details-admin/details-admin.component';
import { UpdateAdminComponent } from './GestionAdmin/update-admin/update-admin.component';
import { AjoutUserComponent } from './GestionUser/ajout-user/ajout-user.component';
import { ListeUserComponent } from './GestionUser/liste-user/liste-user.component';
import { UpdateUserComponent } from './GestionUser/update-user/update-user.component';
import { DetailUserComponent } from './GestionUser/detail-user/detail-user.component';
import { LoginComponent } from './Login/login/login/login.component';
import { AccueilComponent } from './Accueil/accueil/accueil.component';




@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    HeaderComponent,
    AjoutAdminComponent,
    ListeAdminComponent,
    DetailsAdminComponent,
    UpdateAdminComponent,
    AjoutUserComponent,
    ListeUserComponent,
    UpdateUserComponent,
    DetailUserComponent,
    LoginComponent,
    AccueilComponent,
   
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AngularConfirmModalModule.forRoot({
      //optional global config
   
      //confirmBtnClass: 'btn btn-success',
      //confirmBtnText: 'Confirm',
      //cancelBtnClass: 'btn btn-danger',
      //cancelBtnText: 'Cancel',
      //modalSize: 'lg',
      //modalClass: 'some-modal-class'
     })
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
