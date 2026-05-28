import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  constructor(private http: HttpClient) {
   
    
    console.log("Productservice Called");

  }
  getProducts(){
    const url = "https://dummyjson.com/products";
    return this.http.get(url);
  }

}
