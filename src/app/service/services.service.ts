import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http : HttpClient) { }

  getData() {
    return this.http.get('http://localhost:3000/user/get-data');
  }
  postData(data:any) {
    return this.http.post('http://localhost:3000/user/insert-data', data);
  }
}
