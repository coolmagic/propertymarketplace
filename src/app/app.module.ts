import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './layout/menu/menu.component';
import { MatMenuModule, MatTabsModule, MatCardModule, MatButtonModule, MatSelectModule, MatFormFieldModule, MatFormFieldControl, MatInputModule, MatGridListModule, MatDialogModule } from '@angular/material';
import { PropertiesComponent } from './pages/properties/properties.component';
import { LandregistryComponent } from './pages/landregistry/landregistry.component';
import { HmrcComponent } from './pages/hmrc/hmrc.component';
import { SolicitorComponent } from './pages/solicitor/solicitor.component';
import { SalerecordComponent } from './pages/salerecord/salerecord.component';
import { CardComponent } from './pages/properties/card/card.component';
import { DialogComponent } from './pages/properties/dialog/dialog.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        PropertiesComponent,
        LandregistryComponent,
        HmrcComponent,
        SolicitorComponent,
        SalerecordComponent,
        CardComponent,
        DialogComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        CommonModule,
        MatMenuModule,
        MatTabsModule,
        MatCardModule,
        MatButtonModule,
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule,
        MatGridListModule,
        MatDialogModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents: [DialogComponent]
})
export class AppModule { }
