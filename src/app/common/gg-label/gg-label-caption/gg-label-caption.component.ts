import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gg-label-caption',
  templateUrl: './gg-label-caption.component.html',
  styleUrls: ['./gg-label-caption.component.css']
})
export class GgLabelCaptionComponent implements OnInit {
  @Input() caption = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
