import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { of, throwError } from 'rxjs';
import { DadJokesTermCountsComponent } from './dad-jokes-term-counts.component';
import { DadJokesTermCountsService } from '../dad-joke-term-counts-service/dad-jokes-term-counts.service';

describe('DadJokesTermCountsComponent', () => {
  let component: DadJokesTermCountsComponent;
  let fixture: ComponentFixture<DadJokesTermCountsComponent>;
  let dadJokesTermCountsServiceSpy: jasmine.SpyObj<DadJokesTermCountsService>;

  const mockJokeTermCounts: any[] = [
    {
      rank: 1,
      term: "a",
      count: 7
    },
    {
      rank: 2,
      term: "b",
      count: 5
    }, 
  ]

  beforeEach(async(() => {
    const dadJokesTermCountsSpy = jasmine.createSpyObj('DadJokesTermCountsService', ['getJokeTermCounts'])
    TestBed.configureTestingModule({
      declarations: [ DadJokesTermCountsComponent ],
      imports: [ReactiveFormsModule],
      providers: [
        { provide: DadJokesTermCountsService, useValue: dadJokesTermCountsSpy}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadJokesTermCountsComponent);
    dadJokesTermCountsServiceSpy = TestBed.get(DadJokesTermCountsService)
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    dadJokesTermCountsServiceSpy.getJokeTermCounts.and.returnValue(of([]))
    spyOn(component, 'getJokeTermCounts').and.callThrough();
    const getMeCountsBtn = fixture.nativeElement.querySelector('button');
    getMeCountsBtn.click();
    fixture.detectChanges();
    expect(component.getJokeTermCounts).toHaveBeenCalled();
    expect(dadJokesTermCountsServiceSpy.getJokeTermCounts).toHaveBeenCalled();
  });

  // some sanity check testing
  it('should call get joke term counts service on button click', () => {
    dadJokesTermCountsServiceSpy.getJokeTermCounts.and.returnValue(of([]))
    spyOn(component, 'getJokeTermCounts').and.callThrough();
    const getMeCountsBtn = fixture.nativeElement.querySelector('button');
    getMeCountsBtn.click();
    fixture.detectChanges();
    expect(component.getJokeTermCounts).toHaveBeenCalled();
    expect(dadJokesTermCountsServiceSpy.getJokeTermCounts).toHaveBeenCalled();
  });

  it('should display table when there are jokes', () => {
    dadJokesTermCountsServiceSpy.getJokeTermCounts.and.returnValue(of(mockJokeTermCounts));
    spyOn(component, 'getJokeTermCounts').and.callThrough();
    const getMeCountsBtn = fixture.nativeElement.querySelector('button');
    getMeCountsBtn.click();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('table')).toBeTruthy();
  });

  it('should display error message when there are service call returns with error', () => {
    dadJokesTermCountsServiceSpy.getJokeTermCounts.and.returnValue(throwError("test error"));
    spyOn(component, 'getJokeTermCounts').and.callThrough();
    const getMeCountsBtn = fixture.nativeElement.querySelector('button');
    getMeCountsBtn.click();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('div[id="errorText"]')).toBeTruthy();
  });
});
