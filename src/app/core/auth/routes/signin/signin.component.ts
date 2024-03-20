import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { SignInRequestModel } from '../../models/signin.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
})
export class SigninComponent {
  formularioSignIn = this.formBuilder.group({
    username: ['', Validators.required],
    contraseña: ['', Validators.required],
  });

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) {}

  onSubmit() {
    if (this.formularioSignIn.invalid) {
      return;
    }

    const signInRequestModel: SignInRequestModel = new SignInRequestModel(this.formularioSignIn.value);

    this.authService.signin(signInRequestModel).subscribe((response) => {
      this.formularioSignIn.reset();
      this.router.navigateByUrl('/dashboard');
    });
  }
}
