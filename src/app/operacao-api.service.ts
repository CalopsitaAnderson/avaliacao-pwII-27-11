import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperacaoAPIService {

  apiUrl : string = "http://172.16.58.22:8001/api/funcoes/quadrado";

  constructor(private httpClient: HttpClient) { }


  handleError(error) {
    let errorMessage = `Código de erro: ${error.status}\nMenssagem: ${error.message}`;
    alert(errorMessage);
    return throwError(errorMessage);
  }

  quadrado ( num :string):Observable<string>{
    return this.httpClient.get<string>(`${this.apiUrl}/${num}`)    
  }
}
