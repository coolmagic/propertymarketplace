import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitor',
  templateUrl: './solicitor.component.html',
  styleUrls: ['./solicitor.component.scss']
})
export class SolicitorComponent implements OnInit {
  dataList=[] ;
  constructor() { }

  ngOnInit() {
    for(let i=0;i<localStorage.length;i++){
      this.dataList.push(localStorage.getItem(localStorage.key(i)));
    }
    console.log(this.dataList)
  }
}
