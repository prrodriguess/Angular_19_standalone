import { DogsService } from './dogs.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DogListCardComponent } from './dog-list-card.component';

@Component({
  selector: 'app-doglist',
  imports: [CommonModule, DogListCardComponent],
  template: `
    <section class="hero-section">
      <h2 class="hero-text">Discover pets to walk near you</h2>
    </section>
    <article class="pet-list">
      <app-dog-list-card
        *ngFor="let dog of dogsService.dogs"
        [dog]="dog"
      >
    </app-dog-list-card>
    </article>
  `,
  styles: ``,
})
export class DoglistComponent implements OnInit {
  constructor(readonly dogsService: DogsService) {}

  ngOnInit(): void {
    console.log(this.dogsService.dogs);
  }
}
