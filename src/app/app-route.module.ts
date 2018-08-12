import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './core/components/homepage/homepage.component';
import { AuthLoadGuard } from './core/guards/auth-load.guard';
import { DashboardContainerComponent } from './core/components/dashboard-container/dashboard-container.component';
import { ShowcaseComponent } from './core/components/showcase/showcase.component';

const APP_ROUTES: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'dashboard', canLoad: [ AuthLoadGuard ], loadChildren: () => DashboardContainerComponent },
  { path: 'showcase', component: ShowcaseComponent },
  { path: '**', redirectTo: 'error-404', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRouteModule { }
