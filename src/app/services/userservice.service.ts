import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor() { }
}

export interface User {
  name: string;
  infix: string;
  lastname: string;
}