import {Component, OnInit} from '@angular/core';
import {Product} from "../../model/product.entity";
import {StoreApiService} from "../../services/store-api.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{
  titulo = 'Lista de Productos';
  products: Array<Product> = [];
  constructor(private storeApi: StoreApiService) {
  }
  ngOnInit() {
    this.storeApi.getProducts()
        .subscribe((data:any)=>{
          this.products = data;
          console.log(this.products);
        })
  }


}
