import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { NavComponent } from './nav/nav.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from '../route';
import { HomeComponent } from './home/home.component';
import { AirCubeComponent } from './air-cube/air-cube.component';
import { CreditAgricoleComponent } from './credit-agricole/credit-agricole.component';
import { TechnodreamComponent } from './technodream/technodream.component';
import {CollapseModule} from 'ngx-bootstrap/collapse';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        HomeComponent,
        AirCubeComponent,
        CreditAgricoleComponent,
        TechnodreamComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        CollapseModule.forRoot(),
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
