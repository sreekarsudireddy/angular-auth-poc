import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './auth/login/login.component';
import { AuthenticationService } from './service/authentication.service';
import { AuthGuard } from './service/auth-guard.service';
import { SampleComponent } from './sample/sample.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { LayoutComponent } from './layout/layout.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { HeaderComponent } from './header/header.component';
import { UrlHeaderComponent } from './url-header/url-header.component';
import { FooterComponent } from './footer/footer.component';
import { PageHeaderComponent } from './page-header/page-header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SampleComponent,
    UnauthorizedComponent,
    SideNavComponent,
    LayoutComponent,
    ShoppingCartComponent,
    HeaderComponent,
    UrlHeaderComponent,
    FooterComponent,
    PageHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthenticationService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
