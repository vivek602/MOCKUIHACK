import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { AppRouteModule } from './app-route/app-route.module';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ProductService } from './product.service';
import { ShareDataService } from './share-data.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductsComponent,
    ProductDetailsComponent,
    AnalyticsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    AppRouteModule,
    RouterModule
  ],
  providers: [ProductService,ShareDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
