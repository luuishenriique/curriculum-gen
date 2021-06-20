import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RelatorioComponent } from './components/relatorio/relatorio.component';
import { PessoaService } from './service/pessoa.service';
import { ReferenciaComponent } from './components/referencia/referencia.component';

@NgModule({
  declarations: [
    AppComponent,
    RelatorioComponent,
    ReferenciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PessoaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
