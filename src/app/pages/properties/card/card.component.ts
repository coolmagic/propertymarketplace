import {Component, Input, OnChanges} from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnChanges{

    @Input() plot;
    owner: string;
    forSale: boolean;
    price: number;

    selectedCoin;
    coin;
    coins: string[] = ['ETH', 'XRP', 'BTC'];

    constructor(public dialog: MatDialog) {
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(DialogComponent, {
            // data: {name: this.name, animal: this.animal}
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                const json = {
                    website: result,
                    crypto: this.selectedCoin
                };
                const timestamp = new Date().getTime().toString();
                localStorage.setItem(timestamp, JSON.stringify(json));
            }
            console.log('The dialog was closed');
        });
    }

  ngOnChanges() {

     this.owner = this.plot.owner;
     this.forSale = this.plot.forSale;
     this.price = this.plot.price;

    console.log(this.plot.owner);
  }
}

