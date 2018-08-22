import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404ContainerComponent } from './error404-container.component';
import { Error404Module } from './error404/error404.module';
import { Error404ContainerRouteModule } from './error404-container-route.module';

@NgModule({
  imports: [
    CommonModule,
    Error404Module,
    Error404ContainerRouteModule,
  ],
  declarations: [
    Error404ContainerComponent,
  ]
})
export class Error404ContainerModule {}
