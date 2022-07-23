import { Component, OnInit } from '@angular/core';
import { WishlistserviceService } from '../wishlistservice.service';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  userid:any=1;
  wishlistdata:any=[];
  
  

  constructor(private http:HttpClient,
    private wishlistService:WishlistserviceService
    
  ) {

    this.wishlistService.getWishlistData().subscribe(data=>{console.log("from getwishlist", data)
      this.wishlistdata=data;
    })
   
    
   

   }
 
  ngOnInit(): void {
  }
  deletewishlist(){
    
    let wishlistapi="https://bookcart.azurewebsites.net/api/Wishlist/"+this.userid;
    this.http.delete(wishlistapi);
    return this.wishlistdata=[] ;
    

  }
}

    
    
       
    
      
