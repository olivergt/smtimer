import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import { Summon } from 'src/app/models/summon';

@Injectable({
  providedIn: 'root'
})
export class SummonService {

  constructor(
    private http: HttpClient
  ) { }

  getSummonById(id: string): Observable<Summon> {
    return this.http.get<Summon[]>('http://192.168.0.15:3000/summons')
      .pipe(map(summons => {
        return summons.filter(summon => {
          return summon.id == id;
        });
      }))
      .pipe((map(arr => arr[0])));
  }
}
