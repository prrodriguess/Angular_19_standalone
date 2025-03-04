import { Component, Input, OnInit } from '@angular/core';
import { Dog } from './dogs.service';

@Component({
  selector: 'app-dog-list-card',
  imports: [],
  template: `
  <div style="display: flex; flex-direction: row;">
    <div class="dog-card">
      <h3>Nome : {{ dog.name }}</h3>
      <p>Dono : {{ dog.ownerName }}</p>
      <p>Descrição: {{ dog.description }}</p>
      <p>Idade : {{ dog.age }} anos de idade</p>
      <p>Localização : {{ dog.location }}</p>
      <img [src]="dog.photoUrl" alt="{{ dog.name }}" class="dog-image" />
    </div>
  </div>
  `,
  styles: `
  .dog-card {
      border: 1px solid #ccc;
      padding: 16px;
      border-radius: 8px;
      width: 200px;
      margin: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      background-color: #f9f9f9;
    }
    .dog-card h3 {
      font-size: 1.5rem;
      margin-bottom: 8px;
    }
    .dog-card p {
      margin: 4px 0;
    }
    .dog-image {
      width: 100%;
      height: auto;
      border-radius: 4px;
    }
    `,
})
export class DogListCardComponent implements OnInit {
  @Input() dog!: Dog;
  constructor() {}

  ngOnInit(): void {}
}
