import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  products = [];
  constructor(private productservice: ProductService) { 
  }
  
  
  
  ngOnInit() {
    this.products = this.productservice.readProducts();
    console.log(this.products);
  }

}
