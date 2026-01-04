import { Component, inject } from '@angular/core';
import { MoviesService } from '../../shared/services/movies.service';
import { Movie } from '../../shared/components/movie-card-component/interfaces/movie.interface';
import { MovieCardComponent } from "../../shared/components/movie-card-component/movie-card-component";
import { AsyncPipe } from '@angular/common';
import { LoaderComponent } from "../../core/loader-component/loader-component";

@Component({
  selector: 'app-top-rated',
  imports: [MovieCardComponent, AsyncPipe, LoaderComponent],
  templateUrl: './top-rated.html',
  styleUrl: './top-rated.scss',
})
export class TopRated {
  public readonly moviesService = inject(MoviesService);

  public movie: Movie[] = [];

  protected topRatedMovies = this.moviesService.getTopRatedMovies();
}
