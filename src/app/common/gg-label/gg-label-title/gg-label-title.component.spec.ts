import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GgLabelTitleComponent } from './gg-label-title.component';

describe('GgLabelTitleComponent', () => {
  let component: GgLabelTitleComponent;
  let fixture: ComponentFixture<GgLabelTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GgLabelTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GgLabelTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
