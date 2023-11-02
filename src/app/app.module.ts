import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { UserListComponent } from './components/list/list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { AddpeopleComponent } from './addpeople/addpeople.component';
import { HomeComponent } from './home/home.component';
import { UserFormComponent } from './components/user-form/user-form.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserListComponent,
    AddpeopleComponent,
    HomeComponent,
    UserFormComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    NgbModule,
    FontAwesomeModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent},
      { path: 'addpeople', component: AddpeopleComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
