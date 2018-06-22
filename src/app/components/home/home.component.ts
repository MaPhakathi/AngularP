import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name:string;
  surname:String;
  age:string;
  date:string;
  email:string;
  timein:string;
  timeout:string;

  constructor(private routes:Router) { }

  ngOnInit() {
  }
  onLogin(){
    console.log(this.name)
    console.log(this.surname)
    console.log(this.age)
    console.log(this.date)
    console.log(this.email)
    console.log(this.timein)
    console.log(this.timeout)
    this.routes.navigate(['/about'],{queryParams:{name: this.name, surname: this.surname, age:this.age, date: this.date, email:this.email, timein:this.timein, timeout:this.timeout }});
  }
}
