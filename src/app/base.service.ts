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
  delete(id:number){
    return this.http.delete(`${this.api}/${id}`)
  }

  patch(id:number, data:any){
    return this.http.patch(`${this.api}/${id}`, data)
  }
  create(data:any){
    return this.http.post(this.api, data)
  }

  update(id:number, data:any){
    return this.http.put(`${this.api}/${id}`, data)
  }
}
