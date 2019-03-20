import { Component, OnInit } from "@angular/core";
import { ProductService } from "../product.service";
import { ShareDataService } from "../share-data.service";


@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  constructor(private ser: ProductService, private data:ShareDataService) {}

  ngOnInit() {
    this.getProduct();
  }

  allProduct =[]
  getProduct() {
    this.ser.getProductSer().subscribe(data => this.allProduct = data)
  }

  details(e,data){
    console.log(data);
    (this.data.changeMessage(data));

  }
}
