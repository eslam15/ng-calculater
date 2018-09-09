import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor() {
  }

  title = "NG Calculater"
  logs: any = [];
  sum = Number("");


  // Methods
  // Add operation
  add(num1: number, num2: number) {
    this.logs.push(this.sum = num1 + num2);
    if (typeof (Storage) !== "undefined") {
      // Store log
      localStorage.setItem("logs", JSON.stringify(this.logs));
    }  
  }

  // Substruction Operation
  sub(num1: number, num2: number) {
    this.logs.push(this.sum = num1 - num2); 
    if (typeof (Storage) !== "undefined") {
      // Store log
      localStorage.setItem("logs", JSON.stringify(this.logs));
    }   
  }

  // Multiple Operation
  mult(num1: number, num2: number) {
    this.logs.push(this.sum = num1 * num2);
    if (typeof (Storage) !== "undefined") {
      // Store log
      localStorage.setItem("logs", JSON.stringify(this.logs));
    }  
  }

  // Divide Operation
  div(num1: number, num2: number) {
    this.logs.push(this.sum = num1 / num2);
    if (typeof (Storage) !== "undefined") {
      // Store log
      localStorage.setItem("logs", JSON.stringify(this.logs));
    }  
  }

  // Clear Logs
  clearLog() {
    if (typeof (Storage) !== "undefined") {
      localStorage.setItem("logs", "[]");
      this.logs = [];
    }
  }

  // Get Logs
  ngOnInit(): void {
    if (typeof (Storage) !== "undefined") {
      this.logs = JSON.parse(localStorage.getItem("logs"));
    }
  }

}
