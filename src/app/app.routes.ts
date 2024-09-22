import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'home', loadChildren: () => import('./portfolio-website/portfolio-website.module').then(m => m.PortfolioWebsiteModule)}

];
