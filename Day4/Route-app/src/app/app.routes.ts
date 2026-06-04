import { Routes } from "@angular/router";
import { Home } from "./pages/home/home";
import { AboutUs } from "./pages/about-us/about-us";
import { Contact } from "./pages/contact/contact";
import { Login } from "./pages/login/login";
import { Register } from "./pages/register/register";
import { Signup } from "./pages/signup/signup";
import { CourseList } from "./course-list/course-list";


export const routes:Routes=[


  {
    path:'',
    component: Home
  },
  {
    path:'about-us',
    component: AboutUs
  },
  {
    path:'contact',
    component: Contact
  },
  {
    path:'login',
    component: Login
  },
  {
    path:'signup',
    component: Signup
  },
  {
    path:'register',
    component: Register
  },
  {
    path:'courses',
    component: CourseList
  },
  {
    path:'**',
    redirectTo: ''
  }
]
