import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class IdadeService {

  private readonly API = "https://arcane-forest-15844.herokuapp.com/idade"
  constructor(private $http: HttpClient) { }

  buscarIdade() {
    return this.$http.get<number>(this.API)
  }

}
