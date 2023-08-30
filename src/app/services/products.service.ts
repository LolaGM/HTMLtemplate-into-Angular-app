import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  isLoading:boolean = true; //cuando se inicia el constructor está cargando pero luego ya cambia

  products: Product[] = [];
  productsFiltered: Product[] = [];

  constructor( private http: HttpClient ) { 

    this.loadProducts();
  }


  private loadProducts() {

    this.http.get<Product[]>('https://html-angular-a0d50-default-rtdb.europe-west1.firebasedatabase.app/productos_idx.json')
      .subscribe( 
        (resp: Product[]) => {

          console.log(resp);
          this.products = resp;
          this.isLoading = false; //cuando ya tengo los productos lo hago false

          // setTimeout(() => { //para ver un loading mientras cargan los productos pero no hace falta
          //   this.isLoading = false;
          // },2000)
        
        });
  }

  public getProduct(id:string){ //dentro del get indico id

   return this.http.get(`https://html-angular-a0d50-default-rtdb.europe-west1.firebasedatabase.app/productos/${id}.json`); //retornamos todo el objeto así que no nos subscribimos

  };

  public searchProduct( term:string) {

    this.productsFiltered = this.products.filter( product => { //barremos el arreglo con filter
      return true;

    }) 

  }

}
