import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import { PlayerService } from 'src/app/shared/player/player.service';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss'],
})
export class StartScreenComponent implements OnInit {
  playerForm!: FormGroup;
  invalidSubmit?: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private playerService: PlayerService
  ) {}

  // creates form with required nickname field, easily expandable for different kind of data if needed
  ngOnInit(): void {
    this.playerForm = this.formBuilder.group({
      nickname: ['', [Validators.required, this.whitespaceValidator]],
    });
  }

  // custom validator that prevents player from submitting whitespace-only field
  whitespaceValidator(control: FormControl): { whitespace: boolean } | null {
    if ((control.value || '').trim().length === 0) {
      return { whitespace: true };
    }
    return null;
  }

  get nickname() {
    return this.playerForm.get('nickname')!;
  }

  // passes data entered by player and keeps them in PlayerService
  createPlayer(): void {
    if (this.playerForm.valid) {
      this.playerService.player = this.playerForm.value;
      this.playerForm.reset();
      this.router.navigate(['pokemons']);
    } {
      this.invalidSubmit = true;
    }
  }
}
