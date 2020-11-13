import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { LocalStoreService } from '../local-store/local-store.service';
import { UtilsService } from '../utils/utils.service';
import { environment } from 'projects/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(
    private http: HttpClient,
    private utils: UtilsService,
    private localStore: LocalStoreService
  ) {}

  private formatErrors(error: any): any {
    return throwError('An error occurred:', error);
  }

  get(path: string, headerWithToken = true): Observable<any> {
    return this.http
      .get(this.apiUrl(path), { headers: this.headerOptions(headerWithToken) })
      .pipe(catchError(this.formatErrors));
  }

  put(path: string, body: any = {}): Observable<any> {
    return this.http
      .put(this.apiUrl(path), body)
      .pipe(catchError(this.formatErrors));
  }

  post(path: string, body: any = {}, headerWithToken = true): Observable<any> {
    return this.http
      .post(this.apiUrl(path), JSON.stringify(body), {
        headers: this.headerOptions(headerWithToken),
      })
      .pipe(catchError(this.formatErrors));
  }

  delete(path): Observable<any> {
    return this.http
      .delete(this.apiUrl(path))
      .pipe(catchError(this.formatErrors));
  }

  apiUrl(path: string): string {
    return `${environment.api_url}${path}`;
  }

  headerOptions(tokenMandatory = true): HttpHeaders {
    let headers = new HttpHeaders();
    const token = this.localStore.value('token');
    if (tokenMandatory && !this.utils.isEmpty(token)) {
      headers.append('Content-Type', 'application/json');
      headers = headers.append('token', token);
    } else {
      headers = headers.append('Content-Type', 'application/json');
    }
    return headers;
  }
}
