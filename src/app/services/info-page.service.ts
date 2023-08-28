import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { InfoPage } from '../interfaces/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  info:InfoPage = {}; //creamos interface del objeto con las propiedades del JSON
  isLoaded: boolean = false;

  team: any[] = [];

  constructor( private http: HttpClient) {

      this.loadInfo();
      this.loadTeam();
  }

  private loadInfo() {
    //Leer el archivo JSON 
    this.http.get('assets/data/data-page.json')
    .subscribe( (resp: InfoPage) => {
      
      this.isLoaded = true;
      this.info = resp;
      //console.log(resp);
  
    })
  }

  private loadTeam() {
      //Leer el archivo de Firebase
      this.http.get('https://html-angular-a0d50-default-rtdb.europe-west1.firebasedatabase.app/team.json')
      .subscribe( (resp: any) => {
        
        this.team = resp;
        //console.log(resp);

      });

      // this.team = resp;
  }
}
