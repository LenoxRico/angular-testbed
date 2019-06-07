import { Component } from '@angular/core';
import { AppComponentService } from './app-component.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-test-bed';

  constructor(private appComponentService: AppComponentService) {}

  addNumbers(a, b) {
    return a + b;
  }

  multiplyNumbers(a, b) {
    return this.appComponentService.multiplyNumbers(a, b);
  }
}
