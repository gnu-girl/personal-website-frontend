import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GgCardComponent } from './gg-card.component';

describe('GgCardComponent', () => {
  let component: GgCardComponent;
  let fixture: ComponentFixture<GgCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GgCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GgCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
