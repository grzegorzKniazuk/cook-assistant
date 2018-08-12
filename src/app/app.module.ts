import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthService } from './core/services/auth.service';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { ErrorHandlerInterceptor } from './core/interceptors/error-handler.interceptor';
import { UserService } from './core/services/user.service';
import { AuthActivateGuard } from './core/guards/auth-activate.guard';
import { AuthLoadGuard } from './core/guards/auth-load.guard';
import { AppRouteModule } from './app-route.module';
import { RouterModule } from '@angular/router';
import { NotificationService } from './core/services/notification.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    AppRouteModule,
    CoreModule,
    RouterModule,
  ],
  providers: [
    AuthService,
    UserService,
    AuthActivateGuard,
    AuthLoadGuard,
    NotificationService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorHandlerInterceptor, multi: true },
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
