import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  faLinkedin = faLinkedin;
  faGithub = faGithub;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onLogout() {
    window.sessionStorage.clear();
    this.router.navigate(['/iniciar-sesion']);
  }
}
