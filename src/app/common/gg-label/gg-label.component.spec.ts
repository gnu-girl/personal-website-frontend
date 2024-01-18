import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GgLabelComponent } from './gg-label.component';

describe('GgLabelComponent', () => {
  let component: GgLabelComponent;
  let fixture: ComponentFixture<GgLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GgLabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GgLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
