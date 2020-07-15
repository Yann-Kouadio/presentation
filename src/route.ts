import {Routes} from '@angular/router';
import {HomeComponent} from './app/home/home.component';
import {AirCubeComponent} from './app/air-cube/air-cube.component';
import {CreditAgricoleComponent} from './app/credit-agricole/credit-agricole.component';
import {TechnodreamComponent} from './app/technodream/technodream.component';

export const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'experience/air-cube', component: AirCubeComponent},
    {path: 'experience/credit-agricole', component: CreditAgricoleComponent},
    {path: 'experience/technodream', component: TechnodreamComponent},
    {path: '**', redirectTo: '', pathMatch: 'full'}
];
