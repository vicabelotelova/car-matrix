import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError} from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class HttpService {
  private host: string;
  private httpOptions = {
    withCredentials: true
  };

  constructor(
    private httpClient: HttpClient,
  ) {
    this.host = environment.WebApi;
  }

  public get(url: string): Observable<any> {
    return this.httpClient
      .get(`${this.host}${url}`, this.httpOptions)
      .pipe(map(data => {
        return data;
      }), catchError(err => {
        return this.handleError(err);
      }));
  }


  private handleError(error: any): Observable<any> {
      return throwError(`${'The error was caught'}${' '}${error}`);
  }
}
