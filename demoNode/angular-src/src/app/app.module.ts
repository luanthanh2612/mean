import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {Routes,RouterModule} from '@angular/router';

import {UserService} from './services/user.service';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { UpdateComponent } from './components/update/update.component';

const listRoutes : Routes = [
    {path : '', component  : UserComponent},
    {path : 'update/:id',component : UpdateComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,RouterModule.forRoot(listRoutes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
