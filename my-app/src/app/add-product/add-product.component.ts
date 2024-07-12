import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  message: string = ''; // Variable to store the message received from PHP

  constructor(public _shared: SharedService){}

  product = {
    product_id: 0,
    product_name: '',
    product_price: 0,
    product_pic: '',
    owner_id: 0,
    product_desc: ''
  }

  addProduct(){
    console.log(this._shared.products)
    this._shared.addProduct(this.product).subscribe(
      response => {
        if (response.message === 'Product added successfully') {
          this._shared.products.push(this.product); 
          console.log(this._shared.products)
          this.product = {
            product_id: 0,
            product_name: '',
            product_price: 0,
            product_pic: '',
            owner_id: 0,
            product_desc: ''
          }
        } else {
          // Handle other scenarios if needed
        }
      },
      error => {
        this.message = 'Error adding product'; // Handle HTTP errors here
      }
    );
  }
}

