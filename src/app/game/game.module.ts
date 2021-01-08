import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { StartScreenComponent } from './start-screen/start-screen.component';

@NgModule({
  declarations: [StartScreenComponent],
  imports: [SharedModule, ReactiveFormsModule],
})
export class GameModule {}
