import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstorageManagmentService } from 'src/app/services/localstorage-managment.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  public formData: any = {};
  public users: any;

  constructor(private router:Router, public LocalstorageManagmentService: LocalstorageManagmentService) {}

  onSubmitService() {
    this.LocalstorageManagmentService.onSubmit()
  }

  isFieldEmpty(value: any): boolean {
    return value === '' || value === null || value === undefined;
  }

}