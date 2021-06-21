import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReferenciaComponent } from './components/referencia/referencia.component';
import { RelatorioComponent } from './components/relatorio/relatorio.component';

const routes: Routes = [
  {path: 'relatorio', component: RelatorioComponent},
  {path: 'referencia', component: ReferenciaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
