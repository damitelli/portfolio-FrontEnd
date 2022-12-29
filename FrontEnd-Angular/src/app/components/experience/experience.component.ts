import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ExperienceInterface } from 'src/app/model/experience-interface';
import { ExperienceService } from 'src/app/services/experience.service';
import { EditExpModalComponent } from '../modals/edit-exp-modal/edit-exp-modal.component';
import { AddExpModalComponent } from '../modals/add-exp-modal/add-exp-modal.component';
import { DeleteExpModalComponent } from '../modals/delete-exp-modal/delete-exp-modal.component';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})

export class ExperienceComponent implements OnInit {
  experienceList: ExperienceInterface[] = [];

  constructor(private experienceService: ExperienceService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getExpData();
  }

  getExpData() {
    this.experienceService.getExperiencesData().subscribe(experienceList => {
      this.experienceList = experienceList;
    })
  }

  addExpData(newExperience: ExperienceInterface) {
    this.experienceService.addExperienceData(newExperience).subscribe(() => {
      this.getExpData();
    });
  }

  updateExpData(updatedExperience: ExperienceInterface) {
    this.experienceService.updateExperienceData(updatedExperience).subscribe(() => {
      this.getExpData();
    });
  }

  deleteExpData(experience: ExperienceInterface) {
    this.experienceService.deleteExperienceData(experience).subscribe(() => {
      this.getExpData();
    });
  }

  openAddExpModal() {
    const addExpModalRef = this.modalService.open(
      AddExpModalComponent, { size: 'lg', windowClass: 'modal-xl' });
    addExpModalRef.result.then((newExperience) => {
      if (newExperience) {
        this.addExpData(newExperience);
      }
    });
  }

  openEditExpModal(experience: ExperienceInterface) {
    const editEduModalRef = this.modalService.open(
      EditExpModalComponent, { size: 'lg', windowClass: 'modal-xl' });
    editEduModalRef.componentInstance.experience = experience;
    editEduModalRef.result.then((updatedExperience) => {
      if (updatedExperience != null && updatedExperience != undefined) {
        this.updateExpData(updatedExperience);
      }
    });
  }

  openDeleteExpModal(experience: ExperienceInterface) {
    const deleteEduModalRef = this.modalService.open(
      DeleteExpModalComponent, { size: 'lg', windowClass: 'modal-xl' });
    deleteEduModalRef.componentInstance.experience = experience;
    deleteEduModalRef.result.then((experience) => {
      if (experience != null && experience != undefined) {
        this.deleteExpData(experience);
      }
    });
  }
}


