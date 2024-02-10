import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideImgSideTxtComponent } from './side-img-side-txt.component';

describe('SideImgSideTxtComponent', () => {
  let component: SideImgSideTxtComponent;
  let fixture: ComponentFixture<SideImgSideTxtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideImgSideTxtComponent]
    });
    fixture = TestBed.createComponent(SideImgSideTxtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
