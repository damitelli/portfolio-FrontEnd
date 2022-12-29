import { Component } from '@angular/core';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ExperienceInterface } from 'src/app/model/experience-interface';

@Component({
  selector: 'app-delete-exp-modal',
  templateUrl: './delete-exp-modal.component.html',
  styleUrls: ['./delete-exp-modal.component.css']
})

export class DeleteExpModalComponent {
  experience!: ExperienceInterface;
  faCircleXmark = faCircleXmark;

  constructor(public activeModal: NgbActiveModal) { }

  deleteExpData(experience: ExperienceInterface) {
    this.activeModal.close(experience);
  }
}
