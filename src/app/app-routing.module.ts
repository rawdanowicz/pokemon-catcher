import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartScreenComponent } from './game/start-screen/start-screen.component';

const routes: Routes = [{ path: 'start', component: StartScreenComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
