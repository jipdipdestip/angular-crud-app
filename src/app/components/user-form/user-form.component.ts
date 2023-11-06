import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstorageManagmentService } from 'src/app/services/localstorage-managment.service';
import { User } from 'src/app/user.class';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  public userList: User[] = [];
  public formData: any = {};
  public name: string = '';
  public infix: string = '';
  public lastname: string = '';
  public street: string = '';
  public housenumber: string = '';
  public postalcode: string = '';
  public city: string = '';

  constructor(private router: Router, public LocalstorageManagmentService: LocalstorageManagmentService) { }

  onSubmit() {
    if (
      this.isFieldEmpty(this.name) ||
      this.isFieldEmpty(this.lastname) ||
      this.isFieldEmpty(this.street) ||
      this.isFieldEmpty(this.housenumber) ||
      this.isFieldEmpty(this.postalcode) ||
      this.isFieldEmpty(this.city)
    ) {
      alert('please fill in the required fields')
      return;
    }

    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');

    const newUser = {
      id: new Date().getTime().toString(),
      name: this.name,
      infix: this.infix,
      lastname: this.lastname,
      street: this.street,
      housenumber: this.housenumber,
      postalcode: this.postalcode,
      city: this.city
    };

    storedUsers.push(newUser);

    localStorage.setItem('users', JSON.stringify(storedUsers));

    this.formData = {};
    this.router.navigate([''])
  }

  isFieldEmpty(value: any): boolean {
    return value === '' || value === null || value === undefined;
  }

}