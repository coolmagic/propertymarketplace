import { Component, OnInit } from '@angular/core';
import { myAge, loadProperty } from '../../actions';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})
export class PropertiesComponent implements OnInit {

  plots: any;

  constructor() {



  }

  ngOnInit() {
    (async () => {
      this.plots = await loadProperty('0x2c22ff133920be430aa98ca9dea1c81e0bce0d62');
      // console.log(this.plots);
    })();
  }

}
