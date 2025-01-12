import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  private api = 'http://localhost:3000/names'

  constructor(private http:HttpClient) { }

  getDatas(){
    return this.http.get(this.api)
  }

  patch(id:number, data:any){
    return this.http.patch(`${this.api}/${id}`, data)
  }
}
