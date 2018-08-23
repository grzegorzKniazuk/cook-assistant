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
import { AlertService } from './core/services/alert.service';
import { RecipeFormService } from './core/services/recipe-form.service';

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
    AlertService,
    RecipeFormService,
    AuthActivateGuard,
    AuthLoadGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorHandlerInterceptor, multi: true },
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
