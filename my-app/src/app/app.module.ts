import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AllComponent } from './all/all.component';
import { HeaderComponent } from './header/header.component';
import { OwnerManagementComponent } from './owner-management/owner-management.component';
import { ProductManagementComponent } from './product-management/product-management.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { OwnerTableComponent } from './owner-table/owner-table.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { OwnerEditComponent } from './owner-edit/owner-edit.component';
import { ActivatedRoute } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    AllComponent,
    HeaderComponent,
    OwnerManagementComponent,
    ProductManagementComponent,
    OwnerTableComponent,
    OwnerEditComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
