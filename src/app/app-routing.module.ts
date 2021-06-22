import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BrandsComponent} from "./brands/brands.component";

const routes: Routes = [
  {path: '', component: BrandsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
