import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './core/components/homepage/homepage.component';

const APP_ROUTES: Routes = [
  { path: '', component: HomepageComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES, {
      enableTracing: true,
    }),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRouteModule { }
