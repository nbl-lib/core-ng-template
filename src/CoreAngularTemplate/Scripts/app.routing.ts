import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './Login.component';




export const routes: Routes = [
    { path: '', redirectTo: '/Home/Login', pathMatch: 'full' },
    {
            path: 'Home/Login',
            component: LoginComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }