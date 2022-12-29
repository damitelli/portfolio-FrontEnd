import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProjectsInterface } from 'src/app/model/projects-interface';
import { ProjectsService } from 'src/app/services/projects.service';
import { EditProjectModalComponent } from '../modals/edit-project-modal/edit-project-modal.component';
import { AddProjectModalComponent } from '../modals/add-project-modal/add-project-modal.component';
import { DeleteProjectModalComponent } from '../modals/delete-project-modal/delete-project-modal.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {
  projectsList: ProjectsInterface[] = [];

  constructor(private projectsService: ProjectsService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getProjectsData();
  }

  getProjectsData() {
    this.projectsService.getProjectsData().subscribe(projectsList => {
      this.projectsList = projectsList;
    })
  }

  addProjectData(newProject: ProjectsInterface) {
    this.projectsService.addProjectData(newProject).subscribe(() => {
      this.getProjectsData();
    });
  }

  updateProjectData(updatedProject: ProjectsInterface) {
    this.projectsService.updateProjectData(updatedProject).subscribe(() => {
      this.getProjectsData();
    });
  }

  deleteProjectData(project: ProjectsInterface) {
    this.projectsService.deleteProjectData(project).subscribe(() => {
      this.getProjectsData();
    });
  }

  openAddProjectModal() {
    const addProjectModalRef = this.modalService.open(
      AddProjectModalComponent, { size: 'lg', windowClass: 'modal-xl' });
    addProjectModalRef.result.then((newProject) => {
      if (newProject) {
        this.addProjectData(newProject);
      }
    });
  }

  openEditProjectModal(project: ProjectsInterface) {
    const editProjectModalRef = this.modalService.open(
      EditProjectModalComponent, { size: 'lg', windowClass: 'modal-xl' });
    editProjectModalRef.componentInstance.project = project;
    editProjectModalRef.result.then((updatedProject) => {
      if (updatedProject != null && updatedProject != undefined) {
        this.updateProjectData(updatedProject);
      }
    });
  }

  openDeleteProjectModal(project: ProjectsInterface) {
    const deleteProjectModalRef = this.modalService.open(
      DeleteProjectModalComponent, { size: 'lg', windowClass: 'modal-xl' });
    deleteProjectModalRef.componentInstance.project = project;
    deleteProjectModalRef.result.then((project) => {
      if (project != null && project != undefined) {
        this.deleteProjectData(project);
      }
    });
  }
}
