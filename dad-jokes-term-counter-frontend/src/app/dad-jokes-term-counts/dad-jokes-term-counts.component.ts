import { Component, OnInit } from '@angular/core';
import { DadJokesTermCountsService } from '../dad-joke-term-counts-service/dad-jokes-term-counts.service';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-dad-jokes-term-counts',
  templateUrl: './dad-jokes-term-counts.component.html',
  styleUrls: ['./dad-jokes-term-counts.component.scss']
})
export class DadJokesTermCountsComponent implements OnInit {
  numJokes = new FormControl(10, Validators.compose([Validators.required, Validators.min(10)]));
  isLoading = false;
  jokeCountTerms = []
  isError = false;

  constructor(private dadJokeTermCountsService: DadJokesTermCountsService) { }

  ngOnInit(): void {}

  getJokeTermCounts(): void {
    this.isLoading = true;
    this.isError = false;
    this.dadJokeTermCountsService.getJokeTermCounts(this.numJokes.value).subscribe(
      res => {
        this.jokeCountTerms = res;
        this.isLoading = false;
      },
      err => {
        console.log(err);
        this.jokeCountTerms = []
        this.isLoading = false;
        this.isError = true;
      }
    )
  }

}
