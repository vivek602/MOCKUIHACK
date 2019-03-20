import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from '../products/products.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { AnalyticsComponent } from '../analytics/analytics.component';

const routes: Routes = [
  { path: '', redirectTo:'all-product', pathMatch:'full'},
  { path: 'all-product', component: ProductsComponent },
  { path: 'analysis' , component:AnalyticsComponent},
  { path: 'pro-details' , component:ProductDetailsComponent}

// analysis
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouteRoutingModule { }
