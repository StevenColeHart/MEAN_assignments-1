import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  product = {title: "", price: 1.00, imgUrl: "", id: 0};
  id;
  constructor(private _route: ActivatedRoute, private _productservice: ProductService, private _router: Router) { }
  
  ngOnInit() {
    this._route.paramMap.subscribe(params =>{
      this.id = params.get('id');
      console.log(this.id);
      this.product = this._productservice.readOne(this.id);
      console.log("Product ID" , this.product.id);
      //if(this.product == -1){
      //  this._router.navigate(['create']);
      //}
    })
  }

  onSubmit(){
    this._productservice.updateProduct(this.id, this.product);
    this._router.navigate(['list']);
  }
}
