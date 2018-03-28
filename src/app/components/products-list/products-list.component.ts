import { Component, OnInit, OnChanges } from '@angular/core';
import { Produit } from '../../domain/produit';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit, OnChanges {

  data: Produit[];
  constructor(private _service: ProductsService) { // injection de service
  }

  ngOnInit() {
    this.data = this._service.getAllProducts();
    console.log('On init ....');
  }

  ngOnChanges(): void {
    console.log('change has detected ... ');
  }
}
