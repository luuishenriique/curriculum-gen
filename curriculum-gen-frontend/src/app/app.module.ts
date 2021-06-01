import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RelatorioComponent } from './components/relatorio/relatorio.component';
import { PessoaService } from './service/pessoa.service';

@NgModule({
  declarations: [
    AppComponent,
    RelatorioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PessoaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
