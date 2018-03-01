import { VehicleService } from './services/vehicle.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastyModule } from 'ng2-toasty';
import * as Raven from 'raven-js';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { VehicleFormComponent } from './components/vehicle-form/vehicle-form.component';
import { NavmenuComponent } from './components/navmenu/navmenu.component';
import { ErrorHandler } from '@angular/core';
import { AppErrorHandler } from './app.error-handler';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';
import { PaginationComponent } from './components/shared/pagination.component';
import { ViewVehicleComponent } from './components/view-vehicle/view-vehicle.component';
import { PhotoService } from './services/photo.service';


Raven
  .config('https://c0eb519f4d4d45518c4ad55b43bf4f62@sentry.io/286233')
  .install();

@NgModule({
  declarations: [
    AppComponent,
    VehicleFormComponent,
    NavmenuComponent,
    VehicleListComponent,
    ViewVehicleComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpModule,
    FormsModule,
    ToastyModule.forRoot(),
    RouterModule.forRoot([
      { path: '', redirectTo: 'vehicles', pathMatch: 'full' },
      { path: 'vehicle/new', component: VehicleFormComponent },
      { path: 'vehicles/edit/:id', component: VehicleFormComponent },
      { path: 'vehicles/:id', component: ViewVehicleComponent },
      { path: 'vehicles', component: VehicleListComponent },

    ]),
    NgbModule.forRoot(),
  ],
  providers: [
    { provide: ErrorHandler, useClass: AppErrorHandler },

    VehicleService, PhotoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
