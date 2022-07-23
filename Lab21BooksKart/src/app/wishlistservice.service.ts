import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WishlistserviceService {

  constructor(private http:HttpClient) { }
  userid:any=1;
  
  getWishlistData(){
    let wishlistapi="https://bookcart.azurewebsites.net/api/Wishlist/"+this.userid
    return this.http.get(wishlistapi)
  }
}
