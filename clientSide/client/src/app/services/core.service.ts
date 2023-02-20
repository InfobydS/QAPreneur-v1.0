import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CoreService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:3000";

  addUser(data:any){
   return this.http.post(this.url+'/registerwithimg', data);
  }

  getRoleList(){
    return this.http.get(this.url+'/getUserType');
  }

  getInstituteList(){
    return this.http.get(this.url+ '/getInstitute');
  }

}
