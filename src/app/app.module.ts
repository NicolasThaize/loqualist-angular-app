import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandsComponent } from './brands/brands.component';
import { BrandsModalComponent } from './brands-modal/brands-modal.component';
import { BrandsFormComponent } from './brands-form/brands-form.component';
import { BrandsCreateComponent } from './brands-create/brands-create.component';
import { BrandsModifyComponent } from './brands-modify/brands-modify.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    BrandsComponent,
    BrandsModalComponent,
    BrandsFormComponent,
    BrandsCreateComponent,
    BrandsModifyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
