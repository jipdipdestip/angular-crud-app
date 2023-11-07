import { Injectable } from '@angular/core';
import { User } from '../user.class';

@Injectable({
  providedIn: 'root'
})
export class FormDataServiceService {

  constructor() { }

  isFormDataEmpty(formData: any): boolean {
    return (
      formData.name === '' ||
      formData.lastname === '' ||
      formData.street === '' ||
      formData.housenumber === '' ||
      formData.postalcode === '' ||
      formData.city === ''
    );
  }

  getUsers(): User[] {
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    return storedUsers;
  }

  addUser(newUser: User): void {
    const storedUsers = this.getUsers();
    storedUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(storedUsers));
  }
}
