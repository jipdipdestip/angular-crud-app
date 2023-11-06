import { Injectable, OnInit } from '@angular/core';
import { User } from '../user.class';
import { Route, Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class LocalstorageManagmentService {
    public selectedUser: User | null = null;
    public isModalOpen: boolean = false;
    public userList: User[] = [];
    public isEditModalOpen: boolean = false;
    public formData: any = {};
    public name: string = '';
    public infix: string = '';
    public lastname: string = '';
    public street: string = '';
    public housenumber: string = '';
    public postalcode: string = '';
    public city: string = '';

    constructor(public router: Router) { }

    ngOnInit() {
        const storedUsers = localStorage.getItem('users');
        if (storedUsers) {
            const userData = JSON.parse(storedUsers);

            userData.forEach((userData: any) => {
                const user = new User(userData);
                this.userList.push(user);
            });
        }
    }


    isFieldEmpty(value: any): boolean {
        return value === '' || value === null || value === undefined;
    }

    showUserAddress(user: User) {
        this.selectedUser = user;
        this.isModalOpen = true;
    }

    deleteUser(user: User) {
        const index = this.userList.indexOf(user);
        if (confirm('are you sure?')) {
            this.userList.splice(index, 1);
            const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
            const updatedUsers = storedUsers.filter((u: { id: string; }) => u.id !== user.id);
            localStorage.setItem('users', JSON.stringify(updatedUsers));
        }
        location.reload();
    }

    editUser(user: User) {
        this.selectedUser = user;
        this.isEditModalOpen = true;

        this.name = user.name;
        this.infix = user.infix;
        this.lastname = user.lastname;
        this.street = user.street;
        this.housenumber = user.housenumber;
        this.postalcode = user.postalcode;
        this.city = user.city;
    }

    saveUserChanges() {
        if (this.selectedUser) {
            if (
                this.isFieldEmpty(this.selectedUser.name) ||
                this.isFieldEmpty(this.selectedUser.lastname) ||
                this.isFieldEmpty(this.selectedUser.street) ||
                this.isFieldEmpty(this.selectedUser.housenumber) ||
                this.isFieldEmpty(this.selectedUser.postalcode) ||
                this.isFieldEmpty(this.selectedUser.city)
            ) {
                alert('please fill in the required fields')
                return;
            }
        }
    }
}