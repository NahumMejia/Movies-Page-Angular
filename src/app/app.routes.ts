import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Popular } from './features/popular/popular';
import { TopRated } from './features/top-rated/top-rated';
import { MovieDetailsComponent } from './shared/components/movie-details-component/movie-details-component';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'popular',
    component: Popular,
  },
  {
    path: 'top-rated',
    component: TopRated,
  },
  {
    path: 'movie/:id',
    component: MovieDetailsComponent,
  },
];
