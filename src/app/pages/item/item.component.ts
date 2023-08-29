import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { ProductDescription } from 'src/app/interfaces/product-description.interface';

import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  

  product!: ProductDescription; //sin declarar sería undefined
  id!:string;

  constructor(  private route:ActivatedRoute,
                public productsService: ProductsService
                ){} //importamos el activated route
  
  
  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(parameters => {
        this.id = parameters['id']; // Asignación de 'id' aquí
        return this.productsService.getProduct(parameters['id']) as Observable<ProductDescription>;
      })
    ).subscribe(
      (product: ProductDescription) => {
        this.product = product; // Asignación de producto
        //console.log(product);
      },
      error => {
        console.error('Error fetching product:', error);
      }
    );
  }

}
