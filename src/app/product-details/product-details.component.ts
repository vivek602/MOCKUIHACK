import { Component, OnInit } from '@angular/core';
import { ShareDataService } from '../share-data.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private data:ShareDataService) { }
  selectedRow=[];

  ngOnInit() {
    this.data.currentMessage.subscribe(data => {

      this.selectedRow.push(data);
    })
  }

}
