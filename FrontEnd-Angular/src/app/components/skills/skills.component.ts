import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SkillsInterface } from '../../model/skills-interface';
import { SkillsService } from '../../services/skills.service';
import { EditSkillModalComponent } from '../modals/edit-skill-modal/edit-skill-modal.component';
import { AddSkillModalComponent } from '../modals/add-skill-modal/add-skill-modal.component';
import { DeleteSkillModalComponent } from '../modals/delete-skill-modal/delete-skill-modal.component';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsComponent implements OnInit {
  skillsList: SkillsInterface[] = [];

  constructor(private skillsService: SkillsService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getSkillsData();
  }

  getSkillsData() {
    this.skillsService.getSkillsData().subscribe(skillsList => {
      this.skillsList = skillsList;
    })
  }

  addSkillData(newSkill: SkillsInterface) {
    this.skillsService.addSkillData(newSkill).subscribe(() => {
      this.getSkillsData();
    });
  }

  updateSkillData(updatedSkill: SkillsInterface) {
    this.skillsService.updateSkillData(updatedSkill).subscribe(() => {
      this.getSkillsData();
    });
  }

  deleteSkillData(skill: SkillsInterface) {
    this.skillsService.deleteSkillData(skill).subscribe(() => {
      this.getSkillsData();
    });
  }

  openAddSkillModal() {
    const addSkillModalRef = this.modalService.open(
      AddSkillModalComponent, { size: 'lg', windowClass: 'modal-xl' });
    addSkillModalRef.result.then((newSkill) => {
      if (newSkill) {
        this.addSkillData(newSkill);
      }
    });
  }

  openEditSkillModal(skill: SkillsInterface) {
    const editSkillModalRef = this.modalService.open(
      EditSkillModalComponent, { size: 'lg', windowClass: 'modal-xl' });
    editSkillModalRef.componentInstance.skill = skill;
    editSkillModalRef.result.then((updatedSkill) => {
      if (updatedSkill != null && updatedSkill != undefined) {
        this.updateSkillData(updatedSkill);
      }
    });
  }

  openDeleteSkillModal(skill: SkillsInterface) {
    const deleteSkillModalRef = this.modalService.open(
      DeleteSkillModalComponent, { size: 'lg', windowClass: 'modal-xl' });
    deleteSkillModalRef.componentInstance.skill = skill;
    deleteSkillModalRef.result.then((skill) => {
      if (skill != null && skill != undefined) {
        this.deleteSkillData(skill);
      }
    });
  }
}
