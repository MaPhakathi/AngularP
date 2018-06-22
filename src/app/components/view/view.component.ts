import { Component, OnInit } from '@angular/core';
import{ ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  name : '';
  surname :'';
  age :'';
  date:'';
  email:'';
  timein:'';
  timeout:'';
  constructor(private route:ActivatedRoute) { }


  ngOnInit() {
    this.route.queryParams.subscribe(params =>{
    this.name= params['name'];
    this.surname=params['surname'];
    this.age=params['age'];
    this.date=params['date'];
    this.email=params['email'];
    this.timein=params['timein'];
    this.timeout=params['timeout'];

    console.log(this.name);
     console.log(this.surname);
     console.log(this.age);
     console.log(this.date);
     console.log(this.email);
     console.log(this.timein);
     console.log(this.timeout);
    

  });

    
  }

}

