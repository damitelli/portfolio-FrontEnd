import { Component } from '@angular/core';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SkillsInterface } from 'src/app/model/skills-interface';

@Component({
  selector: 'app-delete-skill-modal',
  templateUrl: './delete-skill-modal.component.html',
  styleUrls: ['./delete-skill-modal.component.css']
})

export class DeleteSkillModalComponent {
  skill!: SkillsInterface;
  faCircleXmark = faCircleXmark;

  constructor(public activeModal: NgbActiveModal) { }

  deleteSkillData(skill: SkillsInterface) {
    this.activeModal.close(skill);
  }
}
