import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

@NgModule({
  declarations: [StartScreenComponent, PokemonListComponent],
  imports: [SharedModule, ReactiveFormsModule],
})
export class GameModule {}
