import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
    selectedCoin;
    coin;
    coins: string[] = ['ETH', 'XRP', 'BTC'];

    constructor(public dialog: MatDialog) {}

    openDialog(): void {
        const dialogRef = this.dialog.open(DialogComponent, {
            //data: {name: this.name, animal: this.animal}
        });

        dialogRef.afterClosed().subscribe(result => {
            if(result){
                var json = {
                    website:result,
                    crypto:this.selectedCoin
                };
                var timestamp = new Date().getTime().toString();
                localStorage.setItem(timestamp,JSON.stringify(json));
            }
            console.log('The dialog was closed');
        });
    }

}

