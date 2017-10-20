import { Injectable } from '@angular/core';
//import { Http } from '@angular/http'

@Injectable()
export class ProductService {

  products= [];
  current_id = 1;

  constructor() { }

  createProduct(product){
    this.products.push(product);
    this.current_id++;
  }

  readProducts(){
    return this.products;
  }

  readOne(id){
    for(let p =0; p < this.products.length; p++){
      if(this.products[p].id = id){
        return this.products[p];
      }
    }
    return -1;
  }

  updateProduct(id, product){
    for(let p =0; p < this.products.length; p++){
      if(this.products[p].id = id){
        this.products[p] = product;
        return this.products[p];
      }
    }
    return -1;
  }

  deleteProduct(id){
    for(let p =0; p < this.products.length; p++){
      if(this.products[p].id = id){
        //this.products = this.products.slice(p, 1)
        this.products.slice(p, 1)
        return this.products;
      }
    }
    return -1;
  }

  }
