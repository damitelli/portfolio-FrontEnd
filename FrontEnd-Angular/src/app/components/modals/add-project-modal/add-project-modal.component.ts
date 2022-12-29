import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProjectsInterface } from 'src/app/model/projects-interface';

@Component({
  selector: 'app-add-project-modal',
  templateUrl: './add-project-modal.component.html',
  styleUrls: ['./add-project-modal.component.css']
})

export class AddProjectModalComponent implements OnInit {
  addProjectForm: FormGroup;

  constructor(public activeModal: NgbActiveModal) {
    this.addProjectForm = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
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
      url_imagen: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(1000)
      ]),
      url_proyecto: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(1000)
      ])
    });
  }

  ngOnInit(): void { }

  get nombre(): any {
    return this.addProjectForm.get('nombre');
  }

  get descripcion(): any {
    return this.addProjectForm.get('descripcion');
  }

  get fecha_inicio(): any {
    return this.addProjectForm.get('fecha_inicio');
  }

  get fecha_fin(): any {
    return this.addProjectForm.get('fecha_fin');
  }

  get url_imagen(): any {
    return this.addProjectForm.get('url_imagen');
  }

  get url_proyecto(): any {
    return this.addProjectForm.get('url_proyecto');
  }

  addProjectData(newProject: ProjectsInterface) {
    this.activeModal.close(newProject);
  }
}
