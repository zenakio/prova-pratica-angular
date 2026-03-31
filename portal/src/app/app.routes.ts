import { Routes } from '@angular/router';
import { Sobre } from './pages/sobre/sobre';
import { Noticias } from './pages/noticias/noticias';
import { Home } from './pages/home/home';
import { Tutoriais } from './pages/tutoriais/tutoriais';

export const routes: Routes = [
    {path:'',component: Home},
    {path:'tutoriais',component: Tutoriais},
    {path:'documentacao',component: Noticias},
    {path:'sobre',component: Sobre},
];
