import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { PrimeNgdModule } from '../prime-ngd/prime-ngd.module';



@NgModule({
  declarations: [MenuComponent],
  imports: [
    PrimeNgdModule,
    CommonModule
  ],
  exports:[
    MenuComponent 
  ]
})
export class SharedModule { }
