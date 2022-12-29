import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SkillsInterface } from 'src/app/model/skills-interface';
import { TipoDeHabilidadInterface } from 'src/app/model/tipo-de-habilidad-interface';
import { TipoHabilidadService } from 'src/app/services/tipo-habilidad.service';

@Component({
  selector: 'app-add-skill-modal',
  templateUrl: './add-skill-modal.component.html',
  styleUrls: ['./add-skill-modal.component.css']
})

export class AddSkillModalComponent implements OnInit {
  addSkillForm: FormGroup;
  tipoDeHabilidad: TipoDeHabilidadInterface[] = [];

  constructor(private tipoHabilidadService: TipoHabilidadService, public activeModal: NgbActiveModal) {
    this.addSkillForm = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(50)
      ]),
      porcentaje_de_dominio: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(3),
        Validators.min(1),
        Validators.max(100),
        Validators.pattern(/^([0-9])*$/)
      ]),
      tipo_de_habilidad_id: new FormControl('', [
        Validators.required
      ])
    });
  }

  ngOnInit(): void {
    this.getTipoDeHabilidadData();
  }

  get nombre(): any {
    return this.addSkillForm.get('nombre');
  }

  get porcentaje_de_dominio(): any {
    return this.addSkillForm.get('porcentaje_de_dominio');
  }

  get tipo_de_habilidad_id(): any {
    return this.addSkillForm.get('tipo_de_habilidad_id');
  }

  getTipoDeHabilidadData() {
    this.tipoHabilidadService.getTipoHabilidad().subscribe(tipoDeHabilidadList => {
      this.tipoDeHabilidad = tipoDeHabilidadList;
    })
  }

  addSkillData(newskill: SkillsInterface) {
    this.activeModal.close(newskill);
  }
}
