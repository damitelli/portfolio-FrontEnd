import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NuevoUsuario } from 'src/app/model/nuevo-usuario';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { TokenService } from 'src/app/services/tokenService';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;

  isLogged = false;
  nuevoUsuario!: NuevoUsuario;
  errMsj!: string;

  constructor(
    private formBuilder: FormBuilder,
    private tokenService: TokenService,
    private authService: AuthenticationService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.registrationForm = this.formBuilder.group(
      {
        nombre: ['', [
          Validators.required
        ]],
        nombreUsuario: ['', [
          Validators.required,
          Validators.minLength(3)
        ]],
        email: ['', [
          Validators.required,
          Validators.email
        ]],
        password: ['', [
          Validators.required,
          Validators.minLength(6)
        ]]
      }
    )
  }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  get nombre() {
    return this.registrationForm.get('nombre');
  }

  get nombreUsuario() {
    return this.registrationForm.get('nombreUsuario');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get password() {
    return this.registrationForm.get('password');
  }

  onRegister(event: Event): void {
    event.preventDefault;

    this.nuevoUsuario = new NuevoUsuario(this.registrationForm.value);
    this.authService.nuevo(this.nuevoUsuario).subscribe({
      next: () => {
        this.toastr.success('El usuario ' + this.nuevoUsuario.nombreUsuario + ' ha sido creado con éxito', 'Ok', {
          timeOut: 4000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/iniciar-sesion'])
      },
      error: err => {
        this.errMsj = err.error.mensaje;
        this.registrationForm.setErrors({ unauthenticated: true });
      },
    });
  }
}
