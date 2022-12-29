import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EducationInterface } from 'src/app/model/education-interface';

@Component({
  selector: 'app-add-edu-modal',
  templateUrl: './add-edu-modal.component.html',
  styleUrls: ['./add-edu-modal.component.css']
})

export class AddEduModalComponent implements OnInit {
  addEduForm: FormGroup;

  constructor(public activeModal: NgbActiveModal) {
    this.addEduForm = new FormGroup({
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

  ngOnInit(): void { }

  get titulo(): any {
    return this.addEduForm.get('titulo');
  }

  get descripcion(): any {
    return this.addEduForm.get('descripcion');
  }

  get fecha_inicio(): any {
    return this.addEduForm.get('fecha_inicio');
  }

  get fecha_fin(): any {
    return this.addEduForm.get('fecha_fin');
  }

  get url_logo_institucion(): any {
    return this.addEduForm.get('url_logo_institucion');
  }

  addEduData(newEducation: EducationInterface) {
    this.activeModal.close(newEducation);
  }
}
