import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './components/error404/error404.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {RegisterComponent} from './components/register/register.component';

const CORE_ROUTES: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'error-404', component: Error404Component },
];

export const coreRoute = RouterModule.forChild(CORE_ROUTES);
