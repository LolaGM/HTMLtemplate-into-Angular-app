import { Component } from '@angular/core';
import { InfoPageService } from './services/info-page.service';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  //en app component llamamos a los servicios para que la info y los productos estén cargados
  constructor( 
      public infoPageService: InfoPageService,
      public productsService: ProductsService ) {

  }
}
