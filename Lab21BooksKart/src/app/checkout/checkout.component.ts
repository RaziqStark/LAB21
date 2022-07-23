import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})

export class CheckoutComponent implements OnInit {

  
  shoppingList:any=[];
  grandTotal:any=0;
  
  
  

   getTotalCost(price:any) {
  
    
    this.grandTotal=this.grandTotal+price;
    
  
   }

  
  setTotalCost(){
    this.grandTotal=0;
  }



  
  constructor(private shoppingCart:ShoppingCartService) { 
  
    this.shoppingCart.getShoppingCart().subscribe(data=>{console.log("from shoppingCart", data)
    
    this.shoppingList=data;
    
    
  })

  
  



  }

  
  

  ngOnInit(): void {
    
    
  }
  

}

