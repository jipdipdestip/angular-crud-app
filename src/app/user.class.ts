export class User {
    public id: string;
    public name: string;
    public infix: string;
    public lastname: string;
    public street: string;
    public housenumber: string;
    public postalcode: string;
    public city: string;

    constructor(userData: any) {
        this.id = userData.id;
        this.name = userData.name;
        this.infix = userData.infix;
        this.lastname = userData.lastname;
        this.street = userData.street;
        this.housenumber = userData.housenumber;
        this.postalcode = userData.postalcode;
        this.city = userData.city;
    }

    public get fullName() {
        if (this.infix) {
          return `${this.name} ${this.infix} ${this.lastname}`;
        } else {
          return `${this.name} ${this.lastname}`;
        }
    }

    public get fullAdress() {
        return `${this.street} ${this.housenumber} ${this.postalcode} ${this.city}`
    }
}
