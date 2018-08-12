import {AfterViewInit, Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { AlertComponent } from '../../../shared/components/alert/alert.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit, AfterViewInit {

  public registerForm: FormGroup;
  @ViewChild('notify', { read: ViewContainerRef }) private notifyContainer: ViewContainerRef;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private componentFactoryResolver: ComponentFactoryResolver,
  ) { }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      passwordRepeat: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      regulationsAccepted: [{ value: false, disabled: false }, [Validators.required]],
    }, {
      validator: (form: FormGroup) => { // walidator dla calego formularza
        const values = form.value;

        if (values.password !== values.passwordRepeat) {
          return {
            passwordNotMatch: true,
          };
        }
        return null;
      }
    });
  }

  ngAfterViewInit() {
    this.showSuccess();
  }

  public register(): void {
    this.userService.registerUser({
      username: this.registerForm.get('username').value,
      password: this.registerForm.get('password').value,
      email: this.registerForm.get('email').value,
    });
  }

  private showSuccess(): void {
    this.notifyContainer.clear();
    const notifyComponentFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
    this.notifyContainer.createComponent(notifyComponentFactory);
  }
}
