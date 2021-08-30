import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class IdadeService {

  private readonly API = "http://localhost:8080/idade"
  constructor(private $http: HttpClient) { }

  buscarIdade() {
    return this.$http.get<number>(this.API)
  }

}
