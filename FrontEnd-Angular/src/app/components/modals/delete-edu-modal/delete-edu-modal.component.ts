import { Component } from '@angular/core';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EducationInterface } from 'src/app/model/education-interface';

@Component({
  selector: 'app-delete-edu-modal',
  templateUrl: './delete-edu-modal.component.html',
  styleUrls: ['./delete-edu-modal.component.css']
})

export class DeleteEduModalComponent {
  education!: EducationInterface;
  faCircleXmark = faCircleXmark;

  constructor(public activeModal: NgbActiveModal) { }

  deleteEduData(education: EducationInterface) {
    this.activeModal.close(education);
  }
}
