import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Player } from 'src/app/shared/player';
import { Pokemon } from 'src/app/shared/pokemon';
import { PlayerService } from 'src/app/shared/player.service';
import { PokemonService } from 'src/app/shared/pokemon.service';
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
        .subscribe((data: Pokemon[]) => {
          this.pokemons = data;
        });
    }
  }

  catchEm(): void {
    this.pokemons.forEach((pokemon: Pokemon) => {
      // each Pokemon gets 50% of getting caught
      pokemon.caught = Math.random() < 0.5;
    });

    console.log({ nickname: this.player.nickname, pokemons: this.pokemons });
  }

  ngOnDestroy(): void {
    this.getPokemons?.unsubscribe();
  }
}
