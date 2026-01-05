import { Component, inject, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../movie-card-component/interfaces/movie.interface';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AsyncPipe, DatePipe, NgOptimizedImage } from "@angular/common";
import { Observable, switchMap } from 'rxjs';
import { TagModule } from 'primeng/tag';
import { Card } from "primeng/card";
import { ChipModule } from 'primeng/chip';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-movie-details-component',
  imports: [NgOptimizedImage, AsyncPipe, TagModule, Card, ChipModule, DividerModule, DatePipe, ],
  templateUrl: './movie-details-component.html',
  styleUrl: './movie-details-component.scss',
})
export class MovieDetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private moviesService = inject(MoviesService);

  movie$!: Observable<Movie>;

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.movie$ = this.route.paramMap.pipe(
      switchMap((pm) => this.moviesService.getMovieDetails(Number(pm.get('id'))))
    );
  }
}