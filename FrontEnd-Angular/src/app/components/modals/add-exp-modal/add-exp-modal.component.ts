import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ExperienceInterface } from 'src/app/model/experience-interface';
import { TipoDeEmpleoInterface } from 'src/app/model/tipo-de-empleo-interface';
import { TipoEmpleoService } from 'src/app/services/tipo-empleo.service';

@Component({
  selector: 'app-add-exp-modal',
  templateUrl: './add-exp-modal.component.html',
  styleUrls: ['./add-exp-modal.component.css']
})

export class AddExpModalComponent implements OnInit {
  addExpForm: FormGroup;
  tipoDeEmpleo: TipoDeEmpleoInterface[] = [];

  constructor(private tipoEmpleoService: TipoEmpleoService, public activeModal: NgbActiveModal) {
    this.addExpForm = new FormGroup({
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
    this.getTipoDeEmpleoData();
  }

  get puesto(): any {
    return this.addExpForm.get('puesto');
  }

  get descripcion(): any {
    return this.addExpForm.get('descripcion');
  }

  get fecha_inicio(): any {
    return this.addExpForm.get('fecha_inicio');
  }

  get fecha_fin(): any {
    return this.addExpForm.get('fecha_fin');
  }

  get url_logo_empresa(): any {
    return this.addExpForm.get('url_logo_empresa');
  }

  get tipo_de_empleo_id(): any {
    return this.addExpForm.get('tipo_de_empleo_id');
  }

  getTipoDeEmpleoData() {
    this.tipoEmpleoService.getTipoEmpleo().subscribe(tipoDeEmpleoList => {
      this.tipoDeEmpleo = tipoDeEmpleoList;
    })
  }

  addExpData(newExperience: ExperienceInterface) {
    this.activeModal.close(newExperience);
  }
}
