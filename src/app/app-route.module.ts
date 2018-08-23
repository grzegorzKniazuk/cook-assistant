import { NgModule } from '@angular/core';
import { NoPreloading, RouterModule, Routes} from '@angular/router';
import { HomepageComponent } from './core/components/homepage/homepage.component';

const APP_ROUTES: Routes = [
  { path: '', component: HomepageComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES, {
      preloadingStrategy: NoPreloading,
      enableTracing: false,
    }),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRouteModule {}
