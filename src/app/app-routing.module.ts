import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SampleComponent } from './sample/sample.component';
import { AuthGuard } from './service/auth-guard.service';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { LayoutComponent } from './layout/layout.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'sample', component: SampleComponent , canActivate: [AuthGuard] },
  { path: 'unauthorized', component: UnauthorizedComponent },
  { path: 'app', component: LayoutComponent, children: [
    {path: 'shopping-cart', component: ShoppingCartComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot
    (
    routes
  )],
  exports: [RouterModule],
})
export class AppRoutingModule { }

