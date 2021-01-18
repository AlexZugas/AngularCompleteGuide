import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-component',
  templateUrl: './directives-component.component.html',
  styleUrls: ['./directives-component.component.css']
})
export class DirectivesComponentComponent implements OnInit {
  hideContent: boolean = true;
  logs: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  alterHiddenContent(){
    this.hideContent = !this.hideContent;
    this.logs.push((new Date()).toString());
  }

  getColor(index: number){
    return index >= 4 ? 'blue' : 'white';
  }
}