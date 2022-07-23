import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  userid:any=1100;

  constructor(private http:HttpClient) {}
   
  getShoppingCart(){
    let shoppingcartapi="https://bookcart.azurewebsites.net/api/ShoppingCart/1100"
    return this.http.get(shoppingcartapi)
  }

  // getTotalCost() {
  //   //this.grandTotal=this.grandTotal+this.shoppingList.book.price;
  
  //      return 5+2;
  //    }

}
