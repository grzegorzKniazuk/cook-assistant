import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './core/components/homepage/homepage.component';
import { ShowcaseComponent } from './core/components/showcase/showcase.component';

const ROUTES: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'showcase', component: ShowcaseComponent },
  { path: '**', redirectTo: 'error-404', pathMatch: 'full' },
];

export const appRoute = RouterModule.forRoot(ROUTES);
