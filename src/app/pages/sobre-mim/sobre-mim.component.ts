import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { IdadeService } from 'src/app/service/idade.service';

@Component({
  selector: 'app-sobre-mim',
  templateUrl: './sobre-mim.component.html',
  styleUrls: ['./sobre-mim.component.css']
})
export class SobreMimComponent implements OnInit {

  idade: number = 0;
  ano: any = 0
  mes: any = 0

  textoExperienciaAno = "ano"
  textoExperienciaMes = "mês"

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

}
