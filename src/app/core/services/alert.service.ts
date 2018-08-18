import { ComponentFactoryResolver, ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { AlertComponent } from '../../shared/components/alert/alert.component';
import { AlertType } from '../enums/alert.enum';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlertService {

  private notifyComponentFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
  private component: ComponentRef<AlertComponent>;
  public onError$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public onSuccess$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  private animateShowAndHideMessage(container: ViewContainerRef, hide: boolean): void {
    container.element.nativeElement.parentElement.classList.add('visible');
    setTimeout(() => {
      if (hide) {
        container.element.nativeElement.parentElement.classList.remove('visible');
      }
    }, 2750);
    setTimeout(() => {
      if (hide) {
        container.clear();
      }
    }, 3000);
  }

  private showMessage(container: ViewContainerRef, message: string, type: AlertType): void {
    container.clear();
    this.component = container.createComponent(this.notifyComponentFactory);
    this.component.instance.type = type;
    this.component.instance.message = message;
  }

  public success(container: ViewContainerRef, message: string, hide: boolean = true): void {
    this.showMessage(container, message, AlertType.success);
    this.animateShowAndHideMessage(container, hide);
  }

  public danger(container: ViewContainerRef, message: string, hide: boolean = true): void {
    this.showMessage(container, message, AlertType.danger);
    this.animateShowAndHideMessage(container, hide);
  }

  public warning(container: ViewContainerRef, message: string, hide: boolean = true): void {
    this.showMessage(container, message, AlertType.warning);
    this.animateShowAndHideMessage(container, hide);
  }
}
