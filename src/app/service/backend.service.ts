import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
url = "https://backend.dashback.in/"
  constructor(private http: HttpClient) { }

  // Check Mobile
  checkMob(data){
    return this.http.post(this.url+'checkMob',data)
  }
  // Login
  login(data){
    return this.http.post(this.url+'login',data)
  }
  // registration
  register(data){
    return this.http.post(this.url+'register',data)
  }
  // check sponsor
  checkSpon(data){
    return this.http.get(this.url+'checkSpon/'+data);
  }
  // fetch service
  fetchService(data){
    return this.http.get(this.url+'fetchService/'+data);
  }
  // fetch circle
  fetchCircle(){
    return this.http.get(this.url+'fetchCricle');
  }
}
