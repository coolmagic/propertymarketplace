import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hmrc',
  templateUrl: './hmrc.component.html',
  styleUrls: ['./hmrc.component.scss']
})
export class HmrcComponent implements OnInit {
  dataList=[] ;
  constructor() { }

  ngOnInit() {
    for(let i=0;i<localStorage.length;i++){
      this.dataList.push(localStorage.getItem(localStorage.key(i)));
    }
    console.log(this.dataList)
  }

}
