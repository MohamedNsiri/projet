import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductManagementComponent } from './product-management/product-management.component';
import { OwnerManagementComponent } from './owner-management/owner-management.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { OwnerTableComponent } from './owner-table/owner-table.component';
import { OwnerEditComponent } from './owner-edit/owner-edit.component';

const routes: Routes = [
  { path: 'owner_edit/:owner_id/:owner_name', component: OwnerEditComponent },
  { path: 'owner_edit', component: OwnerEditComponent },
  { path: 'owner_management/owner_table', component: OwnerTableComponent},
  { path:'product_management', component: ProductManagementComponent},
  { path:'owner_management', component: OwnerManagementComponent},
  { path:'', component: AcceuilComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }