import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ExperienceInterface } from 'src/app/model/experience-interface';
import { TipoDeEmpleoInterface } from 'src/app/model/tipo-de-empleo-interface';
import { TipoEmpleoService } from 'src/app/services/tipo-empleo.service';

@Component({
  selector: 'app-edit-exp-modal',
  templateUrl: './edit-exp-modal.component.html',
  styleUrls: ['./edit-exp-modal.component.css']
})

export class EditExpModalComponent implements OnInit {
  experience!: ExperienceInterface;
  editExpForm: FormGroup;
  tipoDeEmpleo: TipoDeEmpleoInterface[] = [];

  constructor(private tipoEmpleoService: TipoEmpleoService, public activeModal: NgbActiveModal) {

    this.editExpForm = new FormGroup({
      puesto: new FormControl('', [
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
      url_logo_empresa: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(1000)
      ]),
      tipo_de_empleo_id: new FormControl('', [
        Validators.required
      ])
    });
  }

  ngOnInit(): void {
    this.editExpForm.setValue({
      puesto: this.experience.puesto,
      descripcion: this.experience.descripcion,
      fecha_inicio: this.experience.fecha_inicio,
      fecha_fin: this.experience.fecha_fin,
      url_logo_empresa: this.experience.url_logo_empresa,
      tipo_de_empleo_id: this.experience.tipo_de_empleo_id,
    });
    this.getTipoDeEmpleoData();
  }

  get puesto(): any {
    return this.editExpForm.get('puesto');
  }

  get descripcion(): any {
    return this.editExpForm.get('descripcion');
  }

  get fecha_inicio(): any {
    return this.editExpForm.get('fecha_inicio');
  }

  get fecha_fin(): any {
    return this.editExpForm.get('fecha_fin');
  }

  get url_logo_empresa(): any {
    return this.editExpForm.get('url_logo_empresa');
  }

  get tipo_de_empleo_id(): any {
    return this.editExpForm.get('tipo_de_empleo_id');
  }

  getTipoDeEmpleoData() {
    this.tipoEmpleoService.getTipoEmpleo().subscribe(tipoDeEmpleoList => {
      this.tipoDeEmpleo = tipoDeEmpleoList;
    })
  }

  updateExpData(updatedData: ExperienceInterface) {
    const updatedExperience: ExperienceInterface = {
      id: this.experience.id,
      puesto: updatedData.puesto,
      descripcion: updatedData.descripcion,
      fecha_inicio: updatedData.fecha_inicio,
      fecha_fin: updatedData.fecha_fin,
      url_logo_empresa: updatedData.url_logo_empresa,
      tipo_de_empleo_id: updatedData.tipo_de_empleo_id
    }
    this.activeModal.close(updatedExperience);
  }
}
