import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from "./pages/about-page/about-page.component";
import { ContactPageComponent } from "./pages/contact-page/contact-page.component";
import { ErrorComponent } from "./pages/error/error.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { ProductDetailPageComponent } from "./pages/product-detail-page/product-detail-page.component";
import { ProductsPageComponent } from "./pages/products-page/products-page.component";
import { RegisterComponent } from "./pages/register/register.component";
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { AuthGuard } from "./gurad/auth.guard";

// http://localhost:4200/home

const routes: Routes = [
    // { path: '', redirectTo:'home', pathMatch:'full' },
    // { path: 'home', component: HomePageComponent },
    // { path: 'products/:catId', component: ProductsPageComponent},
    // { path: 'products/details/:id', component: ProductDetailPageComponent },
    // { path: 'about', component: AboutPageComponent },
    // { path: 'contact', component: ContactPageComponent },
    // { path: 'register', component: RegisterComponent },
    // { path: 'login', component: LoginPageComponent},
    // { path: '**', component: ErrorComponent }
    {path: '', redirectTo:'home', pathMatch:'full'},
    {path: 'home', component: HomePageComponent, canActivate:[AuthGuard]},
    {path: 'products/:catId', component: ProductsPageComponent, canActivate:[AuthGuard]},
    {path: 'products/details/:id', component: ProductDetailPageComponent, canActivate:[AuthGuard]},
    {path: 'about', component: AboutPageComponent},
    {path: 'contact', component: ContactPageComponent, canActivate:[AuthGuard]},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginPageComponent},
    {path: '**', component: ErrorComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}