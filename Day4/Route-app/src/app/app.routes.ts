import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { About } from './pages/about/about';
import { SignUp } from './pages/sign-up/sign-up';

export const routes: Routes = [
    {path:"",component:Home},
    {path:"Login",component:Login},
    {path:"About",component:About},
    {path:"SignUp",component:SignUp}



];
