import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GgLabelCaptionComponent } from './gg-label-caption.component';

describe('GgLabelCaptionComponent', () => {
  let component: GgLabelCaptionComponent;
  let fixture: ComponentFixture<GgLabelCaptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GgLabelCaptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GgLabelCaptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
