import { Component } from '@angular/core';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProjectsInterface } from 'src/app/model/projects-interface';

@Component({
  selector: 'app-delete-project-modal',
  templateUrl: './delete-project-modal.component.html',
  styleUrls: ['./delete-project-modal.component.css']
})

export class DeleteProjectModalComponent {
  project!: ProjectsInterface;
  faCircleXmark = faCircleXmark;

  constructor(public activeModal: NgbActiveModal) { }

  deleteProjectData(project: ProjectsInterface) {
    this.activeModal.close(project);
  }
}
