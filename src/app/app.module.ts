import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExperienciaComponent } from './pages/experiencia/experiencia.component';
import { SobreMimComponent } from './pages/sobre-mim/sobre-mim.component';
import { HttpClientModule } from "@angular/common/http"
import { EducacaoComponent } from './pages/educacao/educacao.component';
import { ContatosComponent } from './pages/contatos/contatos.component';
import { CertificacoesEconquistasComponent } from './pages/certificacoes-econquistas/certificacoes-econquistas.component';
import { IdadeService } from './service/idade.service';
import { DataService } from './service/data.service';

@NgModule({
  declarations: [
    AppComponent,
    ExperienciaComponent,
    SobreMimComponent,
    EducacaoComponent,
    ContatosComponent,
    CertificacoesEconquistasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [IdadeService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
