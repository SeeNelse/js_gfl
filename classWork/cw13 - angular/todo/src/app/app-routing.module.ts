import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'list', component: ListComponent },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
