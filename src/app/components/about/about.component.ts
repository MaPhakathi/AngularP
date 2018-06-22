import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
 name
 surname
 age
 date
 email
 timein
 timeout

  constructor(private access: ActivatedRoute) { }

  ngOnInit() {
    this.access.queryParams.subscribe(data=>{
        this.name= data['name'];
        this.surname= data['surname'];
        this.age= data['age'];
        this.date= data['date'];
        this.email= data['email'];
        this.timein= data['timein'];
        this.timeout= data['timeout'];
    }
    )
  }

}
