import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding-component',
  templateUrl: './data-binding-component.component.html',
  styleUrls: ['./data-binding-component.component.css']
})
export class DataBindingComponentComponent implements OnInit {
  allowClearUsername: boolean = false;
  username: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  onClearUsername(){
    this.username = "";
    this.allowClearUsername = false;
  }

  onUpdateUsername(){
    if (this.username === "") {
      this.allowClearUsername = false;
    }
    else {
      this.allowClearUsername = true;
    }
  }
}
