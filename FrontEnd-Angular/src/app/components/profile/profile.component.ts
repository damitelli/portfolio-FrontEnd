import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProfileInterface } from 'src/app/model/profile-interface';
import { ProfileService } from 'src/app/services/profile.service';
import { EditProfileModalComponent } from '../modals/edit-profile-modal/edit-profile-modal.component';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  profileInfo: ProfileInterface[] = [];

  constructor(private profileService: ProfileService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getProfileData();
  }

  getProfileData() {
    this.profileService.getProfileData().subscribe(profileInfo => {
      this.profileInfo = profileInfo;
    })
  }

  updateExpData(updatedProfile: ProfileInterface) {
    this.profileService.updateProfileData(updatedProfile).subscribe(() => {
      this.getProfileData();
    });
  }

  openEditProfileModal(info: ProfileInterface) {
    const editProfileModalRef = this.modalService.open(
      EditProfileModalComponent, { size: 'lg', windowClass: 'modal-xl' });
    editProfileModalRef.componentInstance.info = info;
    editProfileModalRef.result.then((updatedProfile) => {
      if (updatedProfile != null && updatedProfile != undefined) {
        this.updateExpData(updatedProfile);
      }
    });
  }
}
