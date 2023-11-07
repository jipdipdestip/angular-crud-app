import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormDataServiceService } from 'src/app/services/form-data-service.service';
import { User } from 'src/app/user.class';

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent {
    name: string = '';
    infix: string = '';
    lastname: string = '';
    street: string = '';
    housenumber: string = '';
    postalcode: string = '';
    city: string = '';

    constructor(
        private router: Router,
        private FormDataService: FormDataServiceService,
    ) { }



    onSubmit() {

        const newUser: User = {
            id: new Date().getTime().toString(),
            name: this.name,
            infix: this.infix,
            lastname: this.lastname,
            street: this.street,
            housenumber: this.housenumber,
            postalcode: this.postalcode,
            city: this.city,
            fullName: `${this.name} ${this.infix} ${this.lastname}`,
            fullAdress: `${this.street} ${this.housenumber}, ${this.postalcode} ${this.city}`,
        };

        this.FormDataService.addUser(newUser);

        this.clearUserForm();
        
        this.router.navigate(['']);
    }

    clearUserForm(){
        this.name = '';
        this.infix = '';
        this.lastname = '';
        this.street = '';
        this.housenumber = '';
        this.postalcode = '';
        this.city = '';
      }
}