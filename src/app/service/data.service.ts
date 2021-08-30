import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { DataExperiencia } from '../models/data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

   private readonly API = "https://arcane-forest-15844.herokuapp.com/data"
  constructor(private $http: HttpClient) { }

   buscarData(){
    return  this.$http.get<DataExperiencia>(this.API)
  }

}
