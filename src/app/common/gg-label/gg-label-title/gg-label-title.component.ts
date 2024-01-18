import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gg-label-title',
  templateUrl: './gg-label-title.component.html',
  styleUrls: ['./gg-label-title.component.css']
})
export class GgLabelTitleComponent implements OnInit {

  @Input() title = '';
  constructor() { }

  ngOnInit(): void {
  }

}
