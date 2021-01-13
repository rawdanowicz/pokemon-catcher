import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Player } from 'src/app/shared/player/player';
import { Pokemon } from 'src/app/shared/pokemon/pokemon';
import { PlayerService } from 'src/app/shared/player/player.service';
import { PokemonService } from 'src/app/shared/pokemon/pokemon.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit, OnDestroy {
  player!: Player;
  pokemons!: Pokemon[];

  getPokemons?: Subscription;
  loading = true;
  catchTooltip = true;

  constructor(
    private router: Router,
    private playerService: PlayerService,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    this.player = this.playerService.player;

    // makes sure that player didn't get there by changing URL without entering required data
    if (!this.player.nickname) {
      this.router.navigate(['']);
    } else {
      // gets data from PokemonService
      this.getPokemons = this.pokemonService
        .getPokemons()
        .subscribe((pokemons: Pokemon[]) => {
          this.loading = false;
          this.pokemons = pokemons;
        });
    }
  }

  catchEm(): void {
    // hides newbie tooltip
    this.catchTooltip = false;

    const caughtPokemons = this.pokemonService.catchPokemons();
    console.log(caughtPokemons);
  }

  ngOnDestroy(): void {
    this.getPokemons?.unsubscribe();
  }
}
