import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ProductService {

  constructor(private _http:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };
public baseUrl=`http://localhost:3000/`;
getProductSer():Observable<any>{
  let url = `${this.baseUrl}products`
    return this._http.get(url);
}

}
