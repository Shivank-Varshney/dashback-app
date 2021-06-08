import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
url = "http://localhost:2702/"
  constructor(private http: HttpClient) { }

  // Check Mobile
  checkMob(data){
    this.http.post(this.url+'checkMob',data)
  }
}
