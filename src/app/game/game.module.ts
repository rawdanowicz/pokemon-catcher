import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonComponent } from './pokemon/pokemon.component';

@NgModule({
  declarations: [StartScreenComponent, PokemonListComponent, PokemonComponent],
  imports: [SharedModule, ReactiveFormsModule],
})
export class GameModule {}
