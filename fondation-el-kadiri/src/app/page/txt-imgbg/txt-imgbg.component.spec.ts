import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TxtImgbgComponent } from './txt-imgbg.component';

describe('TxtImgbgComponent', () => {
  let component: TxtImgbgComponent;
  let fixture: ComponentFixture<TxtImgbgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TxtImgbgComponent]
    });
    fixture = TestBed.createComponent(TxtImgbgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
