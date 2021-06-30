import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home.routing';
import { HeaderComponent } from '@modules/shared/components/header/header.component';
// Components
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '@modules/shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
