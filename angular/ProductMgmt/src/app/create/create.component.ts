import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { Product } from '../product';
import { ProductService } from '../product.service'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  //why does this only work when _productservice is
  //a private variable??
  product = {title: "", price: 1.00, imgUrl: "", id: 0};
  constructor(private _productservice: ProductService, private _router: Router) { }
  //_productservice: ProductService;
  onSubmit(){
    this.product.id = this._productservice.current_id;
    console.log(this.product);
    this._productservice.createProduct(this.product);
    console.log(this._productservice.readProducts);
    this.product = {title: "", price: 1.00, imgUrl: "", id: 0}
    this._router.navigate(['list']);
  }

  ngOnInit() {
  }

}
