import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const APP_ROUTES: Routes = [
    {path: 'home', component: LoginComponent},
    {path: '', component: LoginComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);