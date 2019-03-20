import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ProductService {
// cloud
  public url =`http://13.233.208.167:9080/bankING/`
  // public url =`http://10.117.189.22:8080/`


  constructor(private _http:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };
public baseUrl=`http://localhost:3000/`;
getProductSer():Observable<any>{
  // let url = `${this.baseUrl}products`

  let url = `${this.url}api/v1/groups`
    return this._http.get(url);
}

// getSeleProSer(proId):Observable<any>{
//    // let url = `${this.baseUrl}products`

//    let url = `${this.url}api/v1/groups${proId}`
//    return this._http.get(url);

// }

}
