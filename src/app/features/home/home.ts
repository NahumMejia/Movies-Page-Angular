import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../shared/services/movies.service';
import { Movie } from '../../shared/components/movie-card-component/interfaces/movie.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  public movies: Movie[] = [];

  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {
    this.NowPlayingMovies();
  }
  //TO DO
  private NowPlayingMovies(): void {
    this.movieService.getMoviesNowPlaying().subscribe({
      next: (resp) => {
        this.movies = resp.results;
      },
      error: (err) => {
        console.error('Error cargando películas:', err);
      },
    });
  }
}
