import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form-component/form-component.component';
import { SampleService } from './services/sample-service.service';

// Define your routes
const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'form', component: FormComponent },
  // Add more routes as needed
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes) // Configure the routes here
  ],
  providers: [SampleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
