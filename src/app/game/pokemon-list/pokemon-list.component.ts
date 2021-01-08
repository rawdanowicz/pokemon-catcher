import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Player } from 'src/app/shared/player';
import { PlayerService } from 'src/app/shared/player.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  player!: Player;

  constructor(private router: Router, private playerService: PlayerService) {}

  ngOnInit(): void {
    this.player = this.playerService.player;

    // makes sure that player didn't get there by changing URL without entering required data
    if (!this.player.nickname) {
      this.router.navigate(['']);
    }
  }
}
