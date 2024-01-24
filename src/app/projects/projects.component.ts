import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../Services/projects.service';
import { IProject } from "../Structures/models";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(
    private projectSvc: ProjectService
  ) { }

  ngOnInit(): void {
    // this.getProject(2);
    // console.log("P - ", this.projectSvc.getById(2));
  }

  ////////////////////////////////////////////////
  // Public Variables
  projectList$ = this.projectSvc.getAllProjects();
  project$ = this.projectSvc.getProjectById(2);
  buttonText = "+ Add";

  ////////////////////////////////////////////////
  // Public functions

//   .subscribe(data => this.config = {
//     heroesUrl: data.heroesUrl,
//     textfile:  data.textfile,
//     date: data.date,
// });

  /// Fetch all projects from the backend db
  // getProjects(): void {
  //   this.projectSvc.getAll().subscribe({ 
  //     next: (projectsCalled: IProject[]) => {
  //       this.projectList = projectsCalled
  //     },
  //     error: (err) => console.log(err),
  //     complete: () => console.log("completo")
  //   });
  // }

  // getProject(id: Number): void {
  //   this.project = this.projectSvc.getById(id);
  //   console.log("LLLLLLL", this.project);
  // }

}
