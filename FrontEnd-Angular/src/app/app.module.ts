import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { BtnEditComponent } from './components/btn-edit/btn-edit.component';
import { BtnDeleteComponent } from './components/btn-delete/btn-delete.component';
import { BtnAddComponent } from './components/btn-add/btn-add.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { AddExpModalComponent } from './components/modals/add-exp-modal/add-exp-modal.component';
import { EditExpModalComponent } from './components/modals/edit-exp-modal/edit-exp-modal.component';
import { EditEduModalComponent } from './components/modals/edit-edu-modal/edit-edu-modal.component';
import { AddEduModalComponent } from './components/modals/add-edu-modal/add-edu-modal.component';
import { EditSkillModalComponent } from './components/modals/edit-skill-modal/edit-skill-modal.component';
import { AddSkillModalComponent } from './components/modals/add-skill-modal/add-skill-modal.component';
import { EditProjectModalComponent } from './components/modals/edit-project-modal/edit-project-modal.component';
import { AddProjectModalComponent } from './components/modals/add-project-modal/add-project-modal.component';
import { EditProfileModalComponent } from './components/modals/edit-profile-modal/edit-profile-modal.component';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { InterceptorService } from './services/interceptor.service';
import { RegistrationComponent } from './components/registration/registration.component';
import { ToastNoAnimationModule } from 'ngx-toastr';
import { DeleteExpModalComponent } from './components/modals/delete-exp-modal/delete-exp-modal.component';
import { DeleteEduModalComponent } from './components/modals/delete-edu-modal/delete-edu-modal.component';
import { DeleteSkillModalComponent } from './components/modals/delete-skill-modal/delete-skill-modal.component';
import { DeleteProjectModalComponent } from './components/modals/delete-project-modal/delete-project-modal.component';
import { BtnReturnPortfolioComponent } from './components/btn-return-portfolio/btn-return-portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    BtnEditComponent,
    BtnDeleteComponent,
    BtnAddComponent,
    AddExpModalComponent,
    EditExpModalComponent,
    EditEduModalComponent,
    AddEduModalComponent,
    EditSkillModalComponent,
    AddSkillModalComponent,
    EditProjectModalComponent,
    AddProjectModalComponent,
    EditProfileModalComponent,
    LoginComponent,
    PortfolioComponent,
    RegistrationComponent,
    DeleteExpModalComponent,
    DeleteEduModalComponent,
    DeleteSkillModalComponent,
    DeleteProjectModalComponent,
    BtnReturnPortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    ToastNoAnimationModule.forRoot(),
  ],
  providers: [InterceptorService, {
    provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true,
  }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
