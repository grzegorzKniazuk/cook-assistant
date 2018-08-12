import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './core/components/homepage/homepage.component';

const APP_ROUTES: Routes = [
  { path: '', component: HomepageComponent },
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
