import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

  employeeId:number=101;
  employeeName:string="Siddarth";
  employeeAge:number=22;

  title="Employee details - Data binding using various derectives"

  isManager: boolean=true;

  //Array
  skills: string[] = ['JavaScript', 'Angular', 'TypeScript'];

  //Enum
  Position: PositionType = PositionType.SeniorDeveloper;

  //Object
  address: {street: string, city:string, postalCode: number} ={
    street: '123 Main st',
    city: 'New York',
    postalCode: 10001
  };

  //Any data type(can be any type)
  extraInfo: any = 'Additional employee info';

  //Event Binding - handling method
  message: string ='';

  //Two-way data binding
  employeePosition:string = 'Software Engineer';

  //Event Binding method
  hello():void{
    this.message="Hello from Event binding in Angular by - " +this.employeeName;
  }
  clear():void{
    this.message='';
  }

  toggleManagerStatus():void{
    this.isManager = !this.isManager;
  }

  //Property binding - one way binding
  username:string='James Gosling';
  info:string="Property Binding - One way";

  updateUserName(){
    this.username='John Doe';
  }

  convertToDate(){
    const date = new Date();
    return date.toLocaleDateString();
  }

  add():number{
    return 10+200;
  }
}

//Enum for Position Type
enum PositionType{
  JuniorDeveloper,
  SeniorDeveloper,
  TeamLead
}
