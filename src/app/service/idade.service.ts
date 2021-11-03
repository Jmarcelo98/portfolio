import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IdadeService {

  private readonly API = "https://arcane-forest-15844.herokuapp.com/idade"
  private readonly API_LOCAL = `${environment.API_LOCAL}/idade`
  constructor(private $http: HttpClient) { }

  buscarIdade() {
    return this.$http.get<number>(this.API)
  }

}
