import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProjectsInterface } from 'src/app/model/projects-interface';

@Component({
  selector: 'app-edit-project-modal',
  templateUrl: './edit-project-modal.component.html',
  styleUrls: ['./edit-project-modal.component.css']
})

export class EditProjectModalComponent implements OnInit {
  project!: ProjectsInterface;
  editProjectForm: FormGroup;

  constructor(public activeModal: NgbActiveModal) {
    this.editProjectForm = new FormGroup({
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

  ngOnInit(): void {
    this.editProjectForm.setValue({
      nombre: this.project.nombre,
      descripcion: this.project.descripcion,
      fecha_inicio: this.project.fecha_inicio,
      fecha_fin: this.project.fecha_fin,
      url_imagen: this.project.url_imagen,
      url_proyecto: this.project.url_proyecto
    });
  }

  get nombre(): any {
    return this.editProjectForm.get('nombre');
  }

  get descripcion(): any {
    return this.editProjectForm.get('descripcion');
  }

  get fecha_inicio(): any {
    return this.editProjectForm.get('fecha_inicio');
  }

  get fecha_fin(): any {
    return this.editProjectForm.get('fecha_fin');
  }

  get url_imagen(): any {
    return this.editProjectForm.get('url_imagen');
  }

  get url_proyecto(): any {
    return this.editProjectForm.get('url_proyecto');
  }

  updateProjectData(updatedData: ProjectsInterface) {
    const updatedProject: ProjectsInterface = {
      id: this.project.id,
      nombre: updatedData.nombre,
      descripcion: updatedData.descripcion,
      fecha_inicio: updatedData.fecha_inicio,
      fecha_fin: updatedData.fecha_fin,
      url_imagen: updatedData.url_imagen,
      url_proyecto: updatedData.url_proyecto
    }
    this.activeModal.close(updatedProject);
  }
}
