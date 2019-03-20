import { Component, OnInit,OnChanges } from '@angular/core';
import { ShareDataService } from '../share-data.service';
import { ProductService } from '../product.service';



@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{

  constructor(private data:ShareDataService, private ser:ProductService ) { }
  selectedRow=[];
  selectedObj=[];
  latestIndex:number;

  seletedId:number;

  ngOnInit() {
    this.data.currentMessage.subscribe(data => {
      this.selectedRow.push(data);
      this.latestIndex = this.selectedRow[0].index;
    })

    this.getSelected();

  }



getSelectedProDetails(){
  this.seletedId = this.selectedObj[0].productId;
  // this.ser.
}

  getSelected(){
      // alert(this.latestIndex)
      this.selectedObj.push(this.selectedRow[0]) ;

  }

}
