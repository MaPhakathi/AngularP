import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formbooking',
  templateUrl: './formbooking.component.html',
  styleUrls: ['./formbooking.component.css']
})
export class FormbookingComponent implements OnInit {
name:'';
surname:'';
age:'';
date:'';

  constructor(private router: Router) { }

  ngOnInit() {

    
      
      
  }

  onlogin(){
    console.log(this.name);
      console.log(this.surname);
      console.log(this.age);
      console.log(this.date);
      this.router.navigate(['view'],{queryParams:{name:this.name, surname:this.surname, age:this.age, date:this.date}});
  }
}
