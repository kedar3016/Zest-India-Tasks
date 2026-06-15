import { Routes } from "@angular/router";
import { Home } from "./pages/home/home";
import { AboutUs } from "./pages/about-us/about-us";
import { Contact } from "./pages/contact/contact";
import { Login } from "./pages/login/login";
import { Register } from "./pages/register/register";
import { Signup } from "./pages/signup/signup";
import { CourseList } from "./course-list/course-list";
import { CourseDetail } from "./course-list/course-detail/course-detail";
import { AddCourse } from "./add-course/add-course";
import { AdminDashboard } from "./pages/admin-dashboard/admin-dashboard";
import { adminGuard } from "./services/admin.guard";
import { StudentDashboard } from "./pages/student-dashboard/student-dashboard";
import { studentGuard } from "./services/student.guard";

export const routes:Routes=[


  {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path:'home',
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
    path:'courses/:id',
    loadComponent:() => import('./course-list/course-detail/course-detail').then(m => m.CourseDetail)
  },
  {
    path:'add-course',
    component: AddCourse
  },
  {
    path: 'admin-dashboard',
    component: AdminDashboard,
    canActivate: [adminGuard]
  },
  {
    path: 'student-dashboard',
    component: StudentDashboard,
    canActivate: [studentGuard]
  },
  {
    path:'**',
    redirectTo: ''
  }
]
