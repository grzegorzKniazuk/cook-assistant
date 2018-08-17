import {ComponentFactoryResolver, ComponentRef, ElementRef, Injectable, Renderer2, ViewContainerRef} from '@angular/core';
import { AlertComponent } from '../../shared/components/alert/alert.component';
import { AlertType } from '../enums/alert.enum';

@Injectable({
  providedIn: 'root',
})
export class AlertService {

  private notifyComponentFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
  public div: ElementRef;
  private component: ComponentRef<AlertComponent>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  public success(container: ViewContainerRef, message: string): void {
    container.clear();
    this.component = container.createComponent(this.notifyComponentFactory);
    this.component.instance.type = AlertType.success;
    this.component.instance.message = message;
  }

  public danger(container: ViewContainerRef, message: string): void {
    container.clear();
    this.component = container.createComponent(this.notifyComponentFactory);
    this.component.instance.type = AlertType.danger;
    this.component.instance.message = message;
  }

  public warning(container: ViewContainerRef, message: string): void {
    container.clear();
    this.component = container.createComponent(this.notifyComponentFactory);
    this.component.instance.type = AlertType.warning;
    this.component.instance.message = message;
  }

  public removeAlert(container: ViewContainerRef): void {
    container.clear();
  }
}
