import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadJokesTermCountsComponent } from './dad-jokes-term-counts.component';

describe('DadJokesTermCountsComponent', () => {
  let component: DadJokesTermCountsComponent;
  let fixture: ComponentFixture<DadJokesTermCountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadJokesTermCountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadJokesTermCountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
