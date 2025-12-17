import { Component, inject } from '@angular/core';
import { MovieCardComponent } from "../../shared/components/movie-card-component/movie-card-component";
import { Movie } from '../../shared/components/movie-card-component/interfaces/movie.interface';
import { MoviesService } from '../../shared/services/movies.service';
import { LoaderComponent } from "../../core/loader-component/loader-component";
import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MovieCardComponent, LoaderComponent, AsyncPipe],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  movie: Movie[] = [];
  readonly moviesService = inject(MoviesService);

  protected readonly moviesNowPlaying = this.moviesService.getMoviesNowPlaying();
}
