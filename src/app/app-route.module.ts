import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './core/components/homepage/homepage.component';
import { AuthLoadGuard } from './core/guards/auth-load.guard';

const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES, {
      enableTracing: true, // TODO do ustalenia problem z routem
    }),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRouteModule { }
