import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { InfoPage } from '../interfaces/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  info:InfoPage = {}; //creamos interface del objeto con las propiedades del JSON
  isLoaded: boolean = false;

  constructor( private http: HttpClient) {

    //console.log('Info Page Service ready');

    //Leer el archivo JSON creado con la info 
    this.http.get('assets/data/data-page.json')
      .subscribe( (resp: InfoPage) => {
        
        this.isLoaded = true;
        this.info = resp;
        console.log(resp);
        
      })

  }
}
