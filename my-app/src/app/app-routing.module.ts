import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductManagementComponent } from './product-management/product-management.component';
import { OwnerManagementComponent } from './owner-management/owner-management.component';
import { AcceuilComponent } from './acceuil/acceuil.component';

const routes: Routes = [
  { path:'product_management', component: ProductManagementComponent},
  { path:'owner_management', component: OwnerManagementComponent},
  { path:'', component: AcceuilComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }