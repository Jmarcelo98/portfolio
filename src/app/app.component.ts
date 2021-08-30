import { Component, HostListener, OnInit } from '@angular/core';

import { DataService } from './service/data.service';
import { IdadeService } from './service/idade.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  idade: number = 0;
  ano: any 
  mes: any 

  sombra = "rgb(136, 136, 136) 0px 0px 0px;"

  textoExperienciaAno = "ano"
  textoExperienciaMes = "mês"

  paginaRenderizar = "sobreMim"

  constructor(private idadeService: IdadeService, private dataService: DataService) { }


  ngOnInit(): void {

     this.idadeService.buscarIdade().subscribe(prods => {
      this.idade = prods;
    }, error => {
      console.log(error);

    })

    this.dataService.buscarData().subscribe(prods => {
      this.ano = prods.ano
      this.mes = prods.mes

      if (this.ano > 1) {
        this.textoExperienciaAno = "anos"
      }

      if (this.mes > 1) {
        this.textoExperienciaMes = "meses"
      }

    }, error => {
      console.log(error);

    }) 
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {

    const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (offset > 0) {
      this.sombra = "#3580ef  1px 1px 15px;";
    } else {
      this.sombra = "rgb(136, 136, 136) 0px 0px 0px;";
    }

  }
}


