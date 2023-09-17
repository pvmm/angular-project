import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Subject } from 'rxjs';
import { URL_SERVICE } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor(private http: HttpClient) { }

  // Add methods and properties to your service here
  search(params): Promise<ServiceDTO> {
    const promise = new Promise<ServiceDTO>((accept, reject) => {
      this.http.get(URL_SERVICE, { params }).subscribe(
        (dados: ServiceDTO) => {
          accept(dados);
        },
        (e: HttpErrorResponse) => {
          reject(e);
        },
      );
    });

    return promise;
  }

}

export class ServiceDTO {
  response;
  error;
}
