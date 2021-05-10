import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchchannelsComponent } from './searchchannels.component';

describe('SearchchannelsComponent', () => {
  let component: SearchchannelsComponent;
  let fixture: ComponentFixture<SearchchannelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchchannelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchchannelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
