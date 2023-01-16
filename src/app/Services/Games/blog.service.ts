import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Die } from 'src/app/Structures/YahtzeeStructure';
import { Post } from 'src/app/Structures/BlogStructure';

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
    headers.append('Access-Control-Allow-Origin','*');
  
    return this.http.get<Die>(backendUrl+ "/roll",{headers:headers});
  }

  // /blog/new_post
  public newPost() {
    let headers = new HttpHeaders;
    headers.append('Access-Control-Allow-Origin','*');
    headers.append('Content-Type','multipart/form-data');

    let body = new FormData();
    body.append('author', 'Anita Slater');
    body.append('body', 'catscatscatscatscatscatscatscatscatscatscats');
    body.append('title', 'HINKKINNKN');
    body.append('draft', 'false');

    return this.http.post<Post>(backendUrl+"/blog/newPost",body,{headers:headers});
  }
  // this.http.post(url, body);
}
