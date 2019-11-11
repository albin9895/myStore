import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';


@Component({
  selector: 'app-product-comp',
  templateUrl: './product-comp.component.html',
  styleUrls: ['./product-comp.component.css']
})
export class ProductCompComponent implements OnInit {
  products;
  constructor(private service: ProductsService) {
    this.products = this.service.getProducts();
  }
  title = 'store';
  ngOnInit() {
  }


}

