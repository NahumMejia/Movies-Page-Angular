import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Popular } from './features/popular/popular';
import { TopRated } from './features/top-rated/top-rated';

export const routes: Routes = [
    {
        path: '',
        component: Home,
    },
    {
        path: 'popular',
        component: Popular
    },
    {
        path: 'top-rated',
        component: TopRated
    }
];
