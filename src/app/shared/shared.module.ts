import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [CommonModule, RouterModule],
  exports: [CommonModule],
})
export class SharedModule {}
