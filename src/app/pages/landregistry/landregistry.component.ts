import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landregistry',
  templateUrl: './landregistry.component.html',
  styleUrls: ['./landregistry.component.scss']
})
export class LandregistryComponent implements OnInit {
  dataList=[] ;
  constructor() { }

  ngOnInit() {
    for(let i=0;i<localStorage.length;i++){
      this.dataList.push(localStorage.getItem(localStorage.key(i)));
    }
    console.log(this.dataList)
  }

}
