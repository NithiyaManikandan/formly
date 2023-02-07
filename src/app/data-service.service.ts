import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http : HttpClient) { }


  getNationId(){
    return of([
      {
        value : 1,
        label : "India"
      },
      {
        value : 2,
        label : "Germany"
      },
      {
        value : 3,
        label : "Italy"
      }
    ])
  }

  getCities(nationId : number){
    return of(
      [
        {
          value : 1,
          label : "coimbatore",
          nationId : 1
        },
        {
          value : 2,
          label : "Cologne",
          nationId : 2
        },
        {
          value : 1,
          label : "Bologna",
          nationId : 3
        },
        {
          value : 1,
          label : "chennai",
          nationId : 1
        },
        {
          value : 2,
          label : "Hamburg",
          nationId : 2
        },
        {
          value : 1,
          label : "Florence",
          nationId : 3
        }
      ].filter(entry => {
        if(nationId){
          return nationId === entry.nationId
        }
        else{
          return true
        }
      })
    )
  }


  getData(){
    return this.http.get(`https://run.mocky.io/v3/82b69fbb-a4b5-4fcc-b29a-40849a142920`)
  }
}
