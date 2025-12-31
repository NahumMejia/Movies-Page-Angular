import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Popular } from './features/popular/popular';

export const routes: Routes = [
    {
    path: '',
    component: Home,
    },
    {
        path: 'popular',
        component: Popular
    }
];
