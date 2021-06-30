import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Habilidade } from 'src/app/model/habilidade.model';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.scss']
})
export class HabilidadesComponent implements OnInit {

  nivelHabilidadeList: any = [
    { id: 0, nivel: 'iniciante' },
    { id: 1, nivel: 'intermediário' },
    { id: 2, nivel: 'avançado' },
  ]

  @Input() curriculumForm: FormGroup;
  @Input() listaHabilidade: Array<Habilidade> | undefined;

  constructor(private formBuilder: FormBuilder) { 
    this.curriculumForm = this.formBuilder.group({});
    this.listaHabilidade = new Array<Habilidade>();
  }

  get habilidades(): FormArray {
    return this.curriculumForm.controls['habilidades'] as FormArray;
  }

  ngOnInit(): void {
    this.setHabilidade();
    if(this.listaHabilidade){
      this.habilidades.patchValue(this.listaHabilidade);
    }
  }

  private setHabilidade() {
    if(this.listaHabilidade){
      const qtd = this.listaHabilidade.length ? this.listaHabilidade.length : 0;

      for (let i = 0; i < qtd; i++) {
        this.addHabilidade();
      }
    }
  }

  newHabilidade(): FormGroup {
    return this.formBuilder.group({
      descricao: new FormControl(),
      nivelHabilidade: this.formBuilder.group({
        id: new FormControl(),
        nivel: new FormControl()
      })
    });
  }

  addHabilidade() {
    this.habilidades.push(this.newHabilidade());
  }
  
  deleteHabilidade(habilidadeIndex: number) {
    this.habilidades.removeAt(habilidadeIndex);
  }

  selectNivelHabilidade(event: any, formGroupPosition: number) {
    const id = event.value;

    for(let nivelHabilidade of this.nivelHabilidadeList) {

      if(nivelHabilidade.id == id){
        this.habilidades.at(formGroupPosition).get('nivelHabilidade')?.patchValue(nivelHabilidade);
      }
    }
  }
}
