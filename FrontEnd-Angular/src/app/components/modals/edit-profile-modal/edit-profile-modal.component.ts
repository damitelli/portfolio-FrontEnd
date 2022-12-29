import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProfileInterface } from 'src/app/model/profile-interface';

@Component({
  selector: 'app-edit-profile-modal',
  templateUrl: './edit-profile-modal.component.html',
  styleUrls: ['./edit-profile-modal.component.css']
})

export class EditProfileModalComponent implements OnInit {
  info!: ProfileInterface;
  editProfileForm: FormGroup;

  constructor(public activeModal: NgbActiveModal) {
    this.editProfileForm = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(50)
      ]),
      apellido: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(50)
      ]),
      profesion: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50)
      ]),
      localidad: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(50)
      ]),
      sobre_mi: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(1000)
      ]),
      url_foto: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(1000)
      ]),
      url_portada: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(1000)
      ])
    });
  }

  ngOnInit(): void {
    this.editProfileForm.setValue({
      nombre: this.info.nombre,
      apellido: this.info.apellido,
      profesion: this.info.profesion,
      localidad: this.info.localidad,
      sobre_mi: this.info.sobre_mi,
      url_foto: this.info.url_foto,
      url_portada: this.info.url_portada
    });
  }

  get nombre(): any {
    return this.editProfileForm.get('nombre');
  }

  get apellido(): any {
    return this.editProfileForm.get('apellido');
  }

  get localidad(): any {
    return this.editProfileForm.get('localidad');
  }

  get profesion(): any {
    return this.editProfileForm.get('profesion');
  }

  get sobre_mi(): any {
    return this.editProfileForm.get('sobre_mi');
  }

  get url_foto(): any {
    return this.editProfileForm.get('url_foto');
  }

  get url_portada(): any {
    return this.editProfileForm.get('url_portada');
  }

  updateProfileData(updatedProfileData: ProfileInterface) {
    const newProfile: ProfileInterface = {
      id: this.info.id,
      nombre: updatedProfileData.nombre,
      apellido: updatedProfileData.apellido,
      profesion: updatedProfileData.profesion,
      localidad: updatedProfileData.localidad,
      sobre_mi: updatedProfileData.sobre_mi,
      url_foto: updatedProfileData.url_foto,
      url_portada: updatedProfileData.url_portada
    }
    this.activeModal.close(newProfile);
  }
}
