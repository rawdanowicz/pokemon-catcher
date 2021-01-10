import { Component, Input } from '@angular/core';

import { Pokemon } from 'src/app/shared/pokemon/pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent {
  @Input() pokemon!: Pokemon;
}
