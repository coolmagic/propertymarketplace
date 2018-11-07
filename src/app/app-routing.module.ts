import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertiesComponent } from './pages/properties/properties.component';
import { LandregistryComponent } from './pages/landregistry/landregistry.component';
import { HmrcComponent } from './pages/hmrc/hmrc.component';
import { SolicitorComponent } from './pages/solicitor/solicitor.component';
import { SalerecordComponent } from './pages/salerecord/salerecord.component';

const routes: Routes = [
    { path: '', redirectTo: '/properties', pathMatch: 'full' },
    { path: 'properties', component: PropertiesComponent },
    { path: 'landregistry', component: LandregistryComponent },
    { path: 'hmrc', component: HmrcComponent },
    { path: 'solicitor', component: SolicitorComponent },
    { path: 'salerecord', component: SalerecordComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
