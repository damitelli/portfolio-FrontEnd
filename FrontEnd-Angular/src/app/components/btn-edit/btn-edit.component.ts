import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faCircle, faPen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-btn-edit',
  templateUrl: './btn-edit.component.html',
  styleUrls: ['./btn-edit.component.css']
})

export class BtnEditComponent implements OnInit {
  faPen = faPen;
  faCircle = faCircle;

  @Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.btnClick.emit();
  }
}
