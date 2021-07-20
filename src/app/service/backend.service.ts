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
  //fetch team
  fetchTeam(data){
    return this.http.get(this.url+'fetchTeam/'+data);
  }
  // Ad tran
  adTran(data){
    return this.http.post(this.url+'adTran',data);
  }
  fetchBal(data){
    return this.http.get(this.url+'fetchBal/'+data);
  }
  adCount(data){
    return this.http.get(this.url+'adCount/'+data);
  }
  fetchTran(data){
    return this.http.get(this.url+'fetchTran/'+data);
  }
  addWalletAmount(data){
    return this.http.post(this.url+'addWalletAmt',data);
  }
  recharge(data){
    return this.http.post(this.url+'recharge',data);
  }
  addAccount(data){
    return this.http.post(this.url+'addAccount',data);
  }
  fetOpDet(data){
    return this.http.post(this.url+'fetchOpDet',data);
  }
  fetchProfile(data){
    return this.http.get(this.url+'fetchprofile/'+data)
  }
  premium(data){
    return this.http.get(this.url+'premium/'+data);
  }
  fetchbyNum(data){
    return this.http.get(this.url+'fetchbyNumber/'+data);
  }
  fundTransfer(data){
    return this.http.post(this.url+'fundTransfer',data);
  }
}

