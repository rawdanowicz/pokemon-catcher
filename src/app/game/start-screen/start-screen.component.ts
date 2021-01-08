import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PlayerService } from 'src/app/shared/player.service';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss'],
})
export class StartScreenComponent implements OnInit {
  playerForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private playerService: PlayerService
  ) {}

  // creates form with required nickname field, easily expandable for different kind of data if needed
  ngOnInit(): void {
    this.playerForm = this.formBuilder.group({
      nickname: ['', Validators.required],
    });
  }

  get nickname() {
    return this.playerForm.get('nickname')!;
  }

  // passes data entered by user and keeps them in PlayerService
  createPlayer(): void {
    if (this.playerForm.valid) {
      this.playerService.playerNickname = this.nickname.value;
    }
  }
}
