import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Movie } from './interfaces/movie.interface';
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: 'app-movie-card-component',
  imports: [CardModule, ButtonModule, NgOptimizedImage],
  templateUrl: './movie-card-component.html',
  styleUrl: './movie-card-component.scss',
})
export class MovieCardComponent {
  @Input() movie!: Movie;
}
