import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HideHeaderDirective } from '../Hide-Directive/hide-header.directive';
import { HidenavModule } from 'ionic4-hidenav';
import { ReactiveFormsModule} from '@angular/forms';
import { DatePipe } from '@angular/common'




@NgModule({
  declarations: [HideHeaderDirective],
  imports: [
    CommonModule,
    HidenavModule,
    ReactiveFormsModule
  ],
  entryComponents: [],
  exports: [
    HideHeaderDirective,
    HidenavModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe]
})
export class SharedmoduleModule { }
