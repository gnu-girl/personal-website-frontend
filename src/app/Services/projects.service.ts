import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { IProject } from "../Structures/models";

@Injectable()
export class ProjectService {
  constructor(private http: HttpClient) {}

  /// Get all projects in db
  getAllProjects(): Observable<IProject[]> {
    return this.http.get<IProject>('/api/projects').pipe(map((result:any) => result));
  }

  getProjectById(id: Number): any {
    return this.http.get<IProject>('/api/projects/'+id).pipe(map((result:IProject) => result));
  }

  addProject(project: IProject):Observable<boolean> {
    const httpOptions = 
    {
        headers: new HttpHeaders({'Content-Type':'application/json'}),
    }
    console.log("PROJECT IS - ", JSON.stringify(project));
    return this.http.post<boolean>('/api/projects/', JSON.stringify(project), httpOptions);
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
