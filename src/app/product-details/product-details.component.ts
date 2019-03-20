import { Component, OnInit,OnChanges } from '@angular/core';
import { ShareDataService } from '../share-data.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{

  constructor(private data:ShareDataService) { }
  selectedRow=[];
  selectedObj=[];
  latestIndex:number;

  ngOnInit() {
    this.data.currentMessage.subscribe(data => {
      this.selectedRow.push(data);
      this.latestIndex = this.selectedRow[0].index;
    })

    this.getSelected();
  }





  getSelected(){
      // alert(this.latestIndex)
      this.selectedObj.push(this.selectedRow[0]) ;

  }

}
