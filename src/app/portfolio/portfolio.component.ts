import { Component, OnInit } from '@angular/core';
import { YahtzeeService } from '../Services/Games/YahtzeeService';

@Component({
  selector: 'portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  public die: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.die
  }

}
