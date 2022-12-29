import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EducationInterface } from 'src/app/model/education-interface';

@Component({
  selector: 'app-edit-edu-modal',
  templateUrl: './edit-edu-modal.component.html',
  styleUrls: ['./edit-edu-modal.component.css']
})

export class EditEduModalComponent implements OnInit {
  education!: EducationInterface;
  editEduForm: FormGroup;

  constructor(public activeModal: NgbActiveModal) {
    this.editEduForm = new FormGroup({
      titulo: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50)
      ]),
      descripcion: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(1000)
      ]),
      fecha_inicio: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20)
      ]),
      fecha_fin: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20)
      ]),
      url_logo_institucion: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(1000)
      ])
    });
  }

  ngOnInit(): void {
    this.editEduForm.setValue({
      titulo: this.education.titulo,
      descripcion: this.education.descripcion,
      fecha_inicio: this.education.fecha_inicio,
      fecha_fin: this.education.fecha_fin,
      url_logo_institucion: this.education.url_logo_institucion
    });
  }

  get titulo(): any {
    return this.editEduForm.get('titulo');
  }

  get descripcion(): any {
    return this.editEduForm.get('descripcion');
  }

  get fecha_inicio(): any {
    return this.editEduForm.get('fecha_inicio');
  }

  get fecha_fin(): any {
    return this.editEduForm.get('fecha_fin');
  }

  get url_logo_institucion(): any {
    return this.editEduForm.get('url_logo_institucion');
  }

  updateEduData(updatedData: EducationInterface) {
    const updatedEducation: EducationInterface = {
      id: this.education.id,
      titulo: updatedData.titulo,
      descripcion: updatedData.descripcion,
      fecha_inicio: updatedData.fecha_inicio,
      fecha_fin: updatedData.fecha_fin,
      url_logo_institucion: updatedData.url_logo_institucion
    }
    this.activeModal.close(updatedEducation);
  }
}
