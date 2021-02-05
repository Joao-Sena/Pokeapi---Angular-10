import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from 'src/app/components/modal/modal.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    HttpClientModule,
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
