import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgTitleComponent } from './bg-title.component';

describe('BgTitleComponent', () => {
  let component: BgTitleComponent;
  let fixture: ComponentFixture<BgTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BgTitleComponent]
    });
    fixture = TestBed.createComponent(BgTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
