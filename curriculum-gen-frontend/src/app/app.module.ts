import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RelatorioComponent } from './components/relatorio/relatorio.component';
import { PessoaService } from './service/pessoa.service';
import { HabilidadesComponent } from './components/relatorio/habilidades/habilidades.component';
import { CursosComponent } from './components/relatorio/cursos/cursos.component';
import { EmpregosComponent } from './components/relatorio/empregos/empregos.component';

const maskConfig: Partial<IConfig> = {
  validation: false,
};
  
@NgModule({
  declarations: [
    AppComponent,
    RelatorioComponent,
    HabilidadesComponent,
    CursosComponent,
    EmpregosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    NgxMaskModule.forRoot(maskConfig)
  ],
  providers: [
    PessoaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
