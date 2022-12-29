import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SkillsInterface } from 'src/app/model/skills-interface';
import { TipoDeHabilidadInterface } from 'src/app/model/tipo-de-habilidad-interface';
import { TipoHabilidadService } from 'src/app/services/tipo-habilidad.service';

@Component({
  selector: 'app-edit-skill-modal',
  templateUrl: './edit-skill-modal.component.html',
  styleUrls: ['./edit-skill-modal.component.css']
})

export class EditSkillModalComponent implements OnInit {
  skill!: SkillsInterface;
  editSkillForm: FormGroup;
  tipoDeHabilidad: TipoDeHabilidadInterface[] = [];

  constructor(private tipoHabilidadService: TipoHabilidadService, public activeModal: NgbActiveModal) {
    this.editSkillForm = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(50)
      ]),
      porcentaje_de_dominio: new FormControl(0, [
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
    this.editSkillForm.setValue({
      nombre: this.skill.nombre,
      porcentaje_de_dominio: this.skill.porcentaje_de_dominio,
      tipo_de_habilidad_id: this.skill.tipo_de_habilidad_id
    });
    this.getTipoDeHabilidadData();
  }

  get nombre(): any {
    return this.editSkillForm.get('nombre');
  }

  get porcentaje_de_dominio(): any {
    return this.editSkillForm.get('porcentaje_de_dominio');
  }

  get tipo_de_habilidad_id(): any {
    return this.editSkillForm.get('tipo_de_habilidad_id');
  }

  getTipoDeHabilidadData() {
    this.tipoHabilidadService.getTipoHabilidad().subscribe(tipoDeHabilidadList => {
      this.tipoDeHabilidad = tipoDeHabilidadList;
    })
  }

  updateSkillData(updatedData: SkillsInterface) {
    const updatedSkill: SkillsInterface = {
      id: this.skill.id,
      nombre: updatedData.nombre,
      porcentaje_de_dominio: updatedData.porcentaje_de_dominio,
      tipo_de_habilidad_id: updatedData.tipo_de_habilidad_id
    }
    this.activeModal.close(updatedSkill);
  }
}
