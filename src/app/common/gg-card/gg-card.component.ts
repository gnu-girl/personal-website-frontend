import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gg-card',
  templateUrl: './gg-card.component.html',
  styleUrls: ['./gg-card.component.css'],
})
export class GgCardComponent implements OnInit {

  @Input() cardTitle = "";
  @Input() cardCaption = "";

  constructor() { }

  ngOnInit(): void {
  }

  deleteProject(){
    console.log("I CLICKED THE ICON");
  }
}
