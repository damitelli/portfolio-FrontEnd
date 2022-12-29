import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { PortfolioGuard } from './services/portfolioGuard.guard';

const routes: Routes = [
  {
    path: 'portfolio', component: PortfolioComponent, canActivate: [PortfolioGuard], data: {
      expectedRol: ['admin', 'user']
    }
  },
  { path: 'iniciar-sesion', component: LoginComponent },
  { path: 'registrarse', component: RegistrationComponent },
  { path: '**', redirectTo: 'portfolio', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
