import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieListResponse } from '../components/movie-card-component/interfaces/movie.interface';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private readonly API_KEY = environment.TMDB_API_KEY;
  private readonly BASE_URL = 'https://api.themoviedb.org/3';
  private readonly HEADER = {
    accept: 'application/json',
    Authorization: `Bearer ${this.API_KEY}`,
  };

  constructor(private http: HttpClient) {}


  //TO DO
  getMoviesNowPlaying(): Observable<MovieListResponse> {
    const URL = `${this.BASE_URL}/movie/now_playing?language=en-US&page=1`;

    return this.http.get<MovieListResponse>(URL, {
      headers: this.HEADER,
    });
  }
}
