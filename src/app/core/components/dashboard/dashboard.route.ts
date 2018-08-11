import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from '../../guards/auth.guard';


const DASHBOARD_ROUTES: Routes = [
  { path: 'dashboard', canActivate: [ AuthGuard ], loadChildren: 'src/app/core/components/dashboard/dashboard.module#DashboardModule' },
];

export const dashboardRoute = RouterModule.forChild(DASHBOARD_ROUTES);
