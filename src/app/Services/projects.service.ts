// code for product.service.ts

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { IProject } from "../Structures/models";
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ProjectService {
  constructor(private http: HttpClient) {}

  // Create a get http request (get product information in json format)
  getAll(): Observable<IProject[]> {
    return this.http.get<IProject>('/api/projects').pipe(map((result:any) => result));
  }

  getById(id: Number): any {
    return this.http.get<IProject>('/api/projects/'+id).pipe(map((result:IProject) => {result
      }
    ))
  }

  // // Create a post http request (post/add product data to server)
  // addProduct(context: any) {
  //     return this.http.post(`$this.http_product_url`, JSON.stringify(context))
  //         .map((response: Response) => response.json());
  // }

  // // Create a put http request (put/update product data to server)
  // updateProduct(id:number, context: any) {
  //     return this.http.put(`$this.http_product_url/${id}`, JSON.stringify(context))
  //         .map((response: Response) => response.json());
  // }

  // // Create a delete http request (delete product to server)
  // deleteProduct(id: number) {
  //     return this.http.delete(`$this.http_product_url/${id}`)
  //         .map((response: Response) => response.json());
  // }
}
