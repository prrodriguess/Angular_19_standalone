import { Routes } from '@angular/router';
import { DoglistComponent } from './doglist.component';

export const routes: Routes = [
    { path: '',pathMatch: 'full', redirectTo: 'list' },
    { path: 'list', component: DoglistComponent }
];
