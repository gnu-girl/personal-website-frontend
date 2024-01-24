import { Component, OnInit, Input } from '@angular/core';
import { ProjectService } from 'src/app/Services/projects.service';

@Component({
  selector: 'gg-card',
  templateUrl: './gg-card.component.html',
  styleUrls: ['./gg-card.component.css'],
})
export class GgCardComponent implements OnInit {

  @Input() cardTitle = "";
  @Input() cardCaption = "";
  @Input() cardId = 0;

  constructor(private ProjectSvc:ProjectService) { }

  ngOnInit(): void {
  }

  deleteProject(){
    this.ProjectSvc.deleteProject(this.cardId).subscribe();
  }
}
