import { Component, inject, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../movie-card-component/interfaces/movie.interface';
import { ActivatedRoute } from '@angular/router';
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: 'app-movie-details-component',
  imports: [NgOptimizedImage],
  templateUrl: './movie-details-component.html',
  styleUrl: './movie-details-component.scss',
})
export class MovieDetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  public readonly moviesService = inject(MoviesService);
  public movie?: Movie;


  //TO DO: IMPROVE LOGIC
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = Number(params['id']);
      this.moviesService.getMovieDetails(id).subscribe(
        movie => this.movie = movie
      );
    });
  }
}