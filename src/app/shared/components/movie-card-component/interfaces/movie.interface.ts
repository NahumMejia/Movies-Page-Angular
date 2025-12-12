export interface MovieDates {
  maximum: string;
  minimum: string;
}

export interface Movie {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  release_date: string;
  original_language: string;
  adult: boolean;
  video: boolean;
  backdrop_path: string | null;
  poster_path: string | null;
  genre_ids: number[];
  popularity: number;
  vote_average: number;
  vote_count: number;
}

export interface MovieListResponse {
  dates: MovieDates;
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface Genre {
  id: number;
  name: string;
}