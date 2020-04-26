import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent, HeaderComponent, SharedModule } from './shared';
import { HomeModule } from './home/home.module';
import { HttpClientModule } from '@angular/common/http'; 


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent] // an entry component that Angular loads into the DOM during the bootstrap process (application launch)
})
export class AppModule { }
