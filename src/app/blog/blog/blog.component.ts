import { Component, Inject, OnInit } from '@angular/core';
import { BlogService } from 'src/app/Services/Games/blog.service';
import { Die } from 'src/app/Structures/YahtzeeStructure';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  
  public hand: Number[] = [];

  constructor (private blogSvc: BlogService) { 
  }

  ngOnInit(): void {
    this.getHand();
  }


  /* Public Methods */
  getHand(): Number[] {
    if(this.hand = []) {
      for (let i =0; i<5; i++){
        this.blogSvc.getDie().subscribe((v:Die) => this.hand[i] = v.value);
      }
    }
    console.log("FFFF", this.hand);
    return this.hand
  }

  newPost() {
    this.blogSvc.newPost().subscribe();
  }
  /* Private Methods */

}
