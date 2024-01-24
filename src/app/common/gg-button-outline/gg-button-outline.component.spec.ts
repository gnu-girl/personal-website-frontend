import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GgButtonOutlineComponent } from './gg-button-outline.component';

describe('GgButtonOutlineComponent', () => {
  let component: GgButtonOutlineComponent;
  let fixture: ComponentFixture<GgButtonOutlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GgButtonOutlineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GgButtonOutlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
