import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { ProductComponent } from './components/product/product.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'product', component: ProductComponent},
  { path: 'product/:category', component: ProductComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'about', component: AboutComponent},
  { path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
