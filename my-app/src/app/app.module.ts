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

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    AllComponent,
    HeaderComponent,
    OwnerManagementComponent,
    ProductManagementComponent,
    OwnerTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
