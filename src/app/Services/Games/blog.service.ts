import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Die } from 'src/app/Structures/YahtzeeStructure';

// TODO: Update this with a global var pulled from an .env file
const backendUrl: string = 'http://localhost:8000'

@Injectable({
  providedIn: 'root'
})


export class BlogService {

  private die: number = 0;
  
  constructor(private http: HttpClient) {
    // this.die = this.getDie();
  }
  

  public getDie() {
    // console.log("ROLLING!!! ", this.http.get<String>(backendUrl+ "/roll"));

    let headers = new HttpHeaders;
    headers.append('Access-Control-Allow-Origin','*')
  
    return this.http.get<Die>(backendUrl+ "/roll",{headers:headers});
  }
}
