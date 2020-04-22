import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import {
  ApiService,
  HomeService
} from './services';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ApiService,
    HomeService
  ],
  declarations: []
})
export class CoreModule { }