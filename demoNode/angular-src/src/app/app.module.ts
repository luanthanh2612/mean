import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {Routes,RouterModule} from '@angular/router';
import { FlashMessagesModule } from 'angular2-flash-messages';

import {UserService} from './services/user.service';
import {AuthService} from './services/auth.service';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { UpdateComponent } from './components/update/update.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const listRoutes : Routes = [
    {path : '', component  : UserComponent},
    {path : 'update/:id',component : UpdateComponent},
    // {path : '**', component : NotfoundComponent},
    {path : 'login', component: LoginComponent},
    {path : 'signup',component : SignupComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UpdateComponent,
    NotfoundComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,RouterModule.forRoot(listRoutes),FlashMessagesModule
  ],
  providers: [UserService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
