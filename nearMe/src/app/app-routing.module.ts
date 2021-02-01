import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './guards/auth-guard.guard';
import { LoginPageComponent } from './components/login-page/login-page.component';


const routes: Routes = [
  { path: 'main-page', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'main-page', pathMatch: 'full' },
  { path: 'sign-in', component: LoginPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
