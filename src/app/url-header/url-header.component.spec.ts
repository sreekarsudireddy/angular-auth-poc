import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlHeaderComponent } from './url-header.component';

describe('UrlHeaderComponent', () => {
  let component: UrlHeaderComponent;
  let fixture: ComponentFixture<UrlHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrlHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
