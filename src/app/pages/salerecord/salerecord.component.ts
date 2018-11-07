import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salerecord',
  templateUrl: './salerecord.component.html',
  styleUrls: ['./salerecord.component.scss']
})
export class SalerecordComponent implements OnInit {

  dataList=[] ;
  constructor() { }

  ngOnInit() {
    for(let i=0;i<localStorage.length;i++){
      this.dataList.push(localStorage.getItem(localStorage.key(i)));
    }
    console.log(this.dataList)
  }

}
