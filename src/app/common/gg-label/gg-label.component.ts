import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gg-label',
  templateUrl: './gg-label.component.html',
  styleUrls: ['./gg-label.component.css']
})
export class GgLabelComponent implements OnInit {

  @Input() title = '';
  @Input() caption = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
