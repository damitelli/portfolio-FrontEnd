import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { TokenService } from 'src/app/services/tokenService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  form: FormGroup;

  isLogged = false;
  loginUsuario!: LoginUsuario;
  roles: string[] = [];
  errMsj!: string;

  constructor(
    private formBuilder: FormBuilder,
    private tokenService: TokenService,
    private authService: AuthenticationService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.form = this.formBuilder.group(
      {
        nombreUsuario: ['', [
          Validators.required,
          Validators.minLength(3)
        ]],
        password: ['', [
          Validators.required,
          Validators.minLength(6)
        ]],
      }
    )
  }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  get nombreUsuario() {
    return this.form.get('nombreUsuario');
  }
  get password() {
    return this.form.get('password');
  }

  onSubmit(event: Event): void {
    event.preventDefault;

    if (this.form.value !== null && this.form.value !== undefined) {
      this.loginUsuario = new LoginUsuario(this.form.value);
      this.authService.login(this.loginUsuario).subscribe({
        next: data => {
          this.isLogged = true;
          this.tokenService.setToken(data.token);
          this.tokenService.setUserName(data.nombreUsuario);
          this.tokenService.setAuthorities(data.authorities);
          this.roles = data.authorities;
          this.toastr.success('Bienvenido ' + data.nombreUsuario, 'Éxito', {
            timeOut: 3000, positionClass: 'toast-top-center'
          });
          this.router.navigate(['/portfolio'])
        },
        error: err => {
          this.isLogged = false;
          this.errMsj = err.error.mensaje;
          this.form.setErrors({ unauthenticated: true });
        },
      });
    };
  }
}
