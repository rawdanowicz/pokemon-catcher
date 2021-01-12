import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

import { StartScreenComponent } from './start-screen/start-screen.component';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: StartScreenComponent },
  { path: 'pokemons', component: PokemonListComponent },
  {
    path: '**',
    component: PageNotFoundComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameRoutingModule {}
