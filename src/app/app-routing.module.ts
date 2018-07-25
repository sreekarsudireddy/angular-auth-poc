import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SampleComponent } from './sample/sample.component';
import { AuthGuard } from './service/auth-guard.service';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'sample', component: SampleComponent , canActivate: [AuthGuard] },
  { path: 'unauthorized', component: UnauthorizedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot
    (
    routes
  )],
  exports: [RouterModule],
})
export class AppRoutingModule { }

