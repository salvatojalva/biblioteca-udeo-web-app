import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  user: any;

  constructor() { 

  }

  ngOnInit(): void {
    this.user = localStorage.getItem("udeo_user");

    this.user = JSON.parse(this.user);
    
    console.log(this.user);
  }

}
