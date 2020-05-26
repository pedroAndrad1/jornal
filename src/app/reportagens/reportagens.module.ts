import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticiasComponent } from './noticias/noticias.component';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [NoticiasComponent],
  exports: [NoticiasComponent],
  imports: [
    CommonModule,
    MatCardModule,
    FlexLayoutModule
  ]
})
export class ReportagensModule { }
