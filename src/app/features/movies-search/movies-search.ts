import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieCardComponent } from '../../shared/components/movie-card-component/movie-card-component';
import { MoviesService } from '../../shared/services/movies.service';
import { Movie } from '../../shared/components/movie-card-component/interfaces/movie.interface';
import { LoaderComponent } from '../../core/loader-component/loader-component';

@Component({
  selector: 'app-movie-search',
  imports: [MovieCardComponent, LoaderComponent],
  templateUrl: './movies-search.html',
  styleUrl: './movies-search.scss',
})
export class MovieSearchComponent implements OnInit {
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  private readonly moviesService: MoviesService = inject(MoviesService);

  protected searchResults: Movie[] = [];
  protected searchQuery: string = '';
  protected isLoading: boolean = false;

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.searchQuery = params['q'] || '';
      if (this.searchQuery) {
        this.performSearch();
      }
    });
  }

  private performSearch(): void {
    this.isLoading = true;
    this.moviesService.searchMovies(this.searchQuery).subscribe({
      next: (response) => {
        this.searchResults = response.results;
        this.isLoading = false;
      },
      error: () => {
        this.searchResults = [];
        this.isLoading = false;
      },
    });
  }
}
