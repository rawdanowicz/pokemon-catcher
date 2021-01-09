import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { Pokemon } from './pokemon';
import { PlayerService } from './player.service';

@Injectable({ providedIn: 'root' })
export class PokemonService {
  pokemons: Pokemon[] = [];

  constructor(private playerService: PlayerService, private http: HttpClient) {}

  getPokemons(): Observable<Pokemon[]> {
    // defines which Pokemons are going to be fetched depending on player's nickname
    const queryOffset = this.playerService.player.nickname.length * 10;

    // gets Pokemons from pokeAPI
    return this.http.get(`${environment.pokeAPI}${queryOffset}`).pipe(
      map((data: any) => data.results),
      switchMap((data: [{ name: string; url: string }]) => {
        data.forEach((pokemon: { name: string; url: string }) => {
          // initial Pokemon object that will be filled with API's data
          const fetchedPokemon: Pokemon = {
            name: pokemon.name,
            artwork: '',
            stats: [
              {
                name: '',
                value: 0,
              },
            ],
          };
          // requests each Pokemon's own API to get it's artwork and stats
          this.http.get(pokemon.url).subscribe((data: any) => {
            fetchedPokemon.artwork =
              data.sprites.other['official-artwork'].front_default;
            fetchedPokemon.stats = data.stats.map((data: any) => {
              return { name: data.stat.name, value: data.base_stat };
            });
          });
          // after getting all needed data each Pokemon gets pushed into the array
          this.pokemons.push(fetchedPokemon);
        });

        // returns an observable carrying fetched Pokemons array
        return new Observable((observer: Observer<Pokemon[]>) => {
          observer.next(this.pokemons);
        });
      })
    );
  }
}
