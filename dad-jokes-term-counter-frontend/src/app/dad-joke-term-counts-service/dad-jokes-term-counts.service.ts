import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DadJokesTermCountsService {
  private jokeCountsUrl = 'http://localhost:5000/jokeCounts';

  constructor(private http: HttpClient) { }

  getJokeTermCounts (numJokes: number): Observable<any[]> {
    return this.http.get<any[]>(this.jokeCountsUrl, {
      params: {
        numJokes: numJokes.toString()
      }
    })
  }
}
