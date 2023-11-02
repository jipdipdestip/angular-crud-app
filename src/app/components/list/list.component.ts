import { Component, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { faPencil, faTimes } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/user.class';
import { LocalstorageManagmentService } from 'src/app/services/localstorage-managment.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class UserListComponent implements OnInit {
  public selectedUser: User | null = null;
  public isEditModalOpen: boolean = false;
  public isModalOpen: boolean = false;
  public users: User[] = [];
  public faTrash = faTrash;
  public faPencil = faPencil;
  public faInfo = faInfo;
  public faTimes= faTimes;
 
  constructor (public LocalstorageManagmentService: LocalstorageManagmentService) {
    this.clearUserForm();
  }

  ngOnInit() {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      const tmpArr = JSON.parse(storedUsers);

      tmpArr.forEach((userData: any) => {
        const user = new User(userData);
        this.users.push(user);
      });
    }
  }

  showUserAdressService(user: User) {
    this.selectedUser = user;
    this.isModalOpen = true;
  }
  

  deleteUserService(user: User) {
    this.LocalstorageManagmentService.deleteUser(user)    
  }

  editUserService(user: User) {
    this.LocalstorageManagmentService.editUser(user);
    this.selectedUser = this.LocalstorageManagmentService.selectedUser;
    this.isEditModalOpen = true;
  }
   
  saveUserChangesService() {
    this.LocalstorageManagmentService.saveUserChanges();
    
    if (this.selectedUser) {
      const index = this.users.indexOf(this.selectedUser);
  
      if (index !== -1) {
        this.users[index] = this.selectedUser;
  
        localStorage.setItem('users', JSON.stringify(this.users));
      }
  
      this.selectedUser = null;
      this.isEditModalOpen = false;
   
    }
  }
    
  isFieldEmpty(value: any): boolean {
    return value === '' || value === null || value === undefined;
  }

  closePopup() {
    this.isModalOpen = false;
    this.isEditModalOpen = false;

  }

  clearUserForm(){
    this.LocalstorageManagmentService.name = '';
    this.LocalstorageManagmentService.infix = '';
    this.LocalstorageManagmentService.lastname = '';
    this.LocalstorageManagmentService.street = '';
    this.LocalstorageManagmentService.housenumber = '';
    this.LocalstorageManagmentService.postalcode = '';
    this.LocalstorageManagmentService.city = '';
  }
  
  }

