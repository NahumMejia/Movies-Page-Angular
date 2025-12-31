import { Component, inject } from '@angular/core';
import { MovieCardComponent } from "../../shared/components/movie-card-component/movie-card-component";
import { LoaderComponent } from "../../core/loader-component/loader-component";
import { MoviesService } from '../../shared/services/movies.service';
import { Movie } from '../../shared/components/movie-card-component/interfaces/movie.interface';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-popular',
  imports: [MovieCardComponent, LoaderComponent, AsyncPipe],
  templateUrl: './popular.html',
  styleUrl: './popular.scss',
})
export class Popular {
  public readonly moviesService = inject(MoviesService);
  public movie: Movie[] = [];
  protected popularMovies = this.moviesService.getPopularMovies();
}
