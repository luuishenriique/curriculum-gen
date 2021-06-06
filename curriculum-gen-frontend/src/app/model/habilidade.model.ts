import { NivelHabilidade } from "./nivel-habilidade.model";

export interface Habilidade{
    id: number;
    nome:string;
    nivel:NivelHabilidade;
    isExperiente:boolean;
}