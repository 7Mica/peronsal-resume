import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  private apiBaseUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  public get(apiPath: string, params?: HttpParams): Observable<any> {
    const options = { params };

    return this.httpClient.get(`${this.apiBaseUrl}${apiPath}`, options);
  }
}
