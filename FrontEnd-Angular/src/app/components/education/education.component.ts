import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EducationInterface } from 'src/app/model/education-interface';
import { EducationService } from 'src/app/services/education.service';
import { EditEduModalComponent } from '../modals/edit-edu-modal/edit-edu-modal.component';
import { AddEduModalComponent } from '../modals/add-edu-modal/add-edu-modal.component';
import { DeleteEduModalComponent } from '../modals/delete-edu-modal/delete-edu-modal.component';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})

export class EducationComponent implements OnInit {
  educationList: EducationInterface[] = [];

  constructor(private educationService: EducationService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getEduData();
  }

  getEduData() {
    this.educationService.getEducationData().subscribe(educationList => {
      this.educationList = educationList;
    })
  }

  addEduData(newEducation: EducationInterface) {
    this.educationService.addEducationData(newEducation).subscribe(() => {
      this.getEduData();
    });
  }

  updateEduData(updatedEducation: EducationInterface) {
    this.educationService.updateEducationData(updatedEducation).subscribe(() => {
      this.getEduData();
    })
  }

  deleteEduData(education: EducationInterface) {
    this.educationService.deleteEducationData(education).subscribe(() => {
      this.getEduData();
    });
  }

  openAddEduModal() {
    const addEduModalRef = this.modalService.open(
      AddEduModalComponent, { size: 'lg', windowClass: 'modal-xl' });
    addEduModalRef.result.then((newEducation) => {
      if (newEducation) {
        this.addEduData(newEducation);
      }
    });
  }

  openEditEduModal(education: EducationInterface) {
    const editEduModalRef = this.modalService.open(
      EditEduModalComponent, { size: 'lg', windowClass: 'modal-xl' });
    editEduModalRef.componentInstance.education = education;
    editEduModalRef.result.then((updatedEducation) => {
      if (updatedEducation != null && updatedEducation != undefined) {
        this.updateEduData(updatedEducation);
      }
    });
  }

  openDeleteEduModal(education: EducationInterface) {
    const deleteEduModalRef = this.modalService.open(
      DeleteEduModalComponent, { size: 'lg', windowClass: 'modal-xl' });
    deleteEduModalRef.componentInstance.education = education;
    deleteEduModalRef.result.then((education) => {
      if (education != null && education != undefined) {
        this.deleteEduData(education);
      }
    });
  }
}
