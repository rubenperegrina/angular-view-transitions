import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'about',
        title: 'About',
        loadComponent: () =>
            import('./pages/about.component')
    },
    {
        path: 'contact',
        title: 'Contact',
        loadComponent: () =>
            import('./pages/contact.component')
    },
];
