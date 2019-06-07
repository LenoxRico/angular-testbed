import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppComponentService {

  constructor() { }

  multiplyNumbers(a, b) {
    return a * b;
  }
}
