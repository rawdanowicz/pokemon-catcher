import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/shared/player.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  nickname!: string;

  constructor(private router: Router, private playerService: PlayerService) {}

  ngOnInit(): void {
    this.nickname = this.playerService.playerNickname;

    // makes sure that player has entered required data, otherwise navigates to start screen
    if (this.nickname) {
      this.nickname = this.playerService.playerNickname;
    } else {
      this.router.navigate(['']);
    }
  }
}
