import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404ContainerComponent } from './error404-container.component';
import { Error404Component } from './error404/error404.component';

const ERROR404_ROUTES: Routes = [
  { path: '', component: Error404ContainerComponent,
    children: [
      { path: '', component: Error404Component }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(ERROR404_ROUTES),
  ],
  exports: [
    RouterModule,
  ]
})
export class Error404ContainerRouteModule { }
