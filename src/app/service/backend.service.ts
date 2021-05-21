import { Injectable } from '@angular/core';
import  { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  Url = "https://backend.dashback.in/"

  constructor(private http : HttpClient) { }

  test(){
    return this.http.get(this.Url + 'fetchAll');
  }
}
