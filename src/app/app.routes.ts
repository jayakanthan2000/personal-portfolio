import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { AwardsComponent } from './awards/awards.component';

export const routes: Routes = [
    {path:'', title:'Home', component:IndexComponent},
    {path:'awards', title:'My Awards', component: AwardsComponent},
];
