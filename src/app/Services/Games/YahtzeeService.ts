import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const backendUrl: string = 'http://localhost:8000/'

@Injectable({
  providedIn: 'root'
})

export class YahtzeeService {

  private die: number = 0;

  constructor(private http: HttpClient) {
    this.die = this.getDie();
  }
  

  public getDie(): number {
    console.log("ROLLING!!! ", this.http.get<String>(backendUrl+ "/roll"));

    return 0;
  }

  
  }