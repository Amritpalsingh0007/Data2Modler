import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NewUserComponent } from './new-user/new-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'login', component: LoginComponent},
    {path:'logout',component: LogoutComponent},
    {path: 'forgot-password', component: ForgotPasswordComponent},
    {path: 'register', component: NewUserComponent},
    {path:'dataset', loadChildren: () => import('./datasets/datasets.module').then(m => m.DatasetsModule)},
    {path:'model', loadChildren: () => import('./models/models.module').then(m => m.ModelsModule)},
    {path: '**', loadChildren : () => import('./pagenotfoundmodule/pagenotfoundmodule.module').then(m => m.PagenotfoundmoduleModule)}
];
