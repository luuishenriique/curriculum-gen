import { NivelHabilidade } from "./nivel-habilidade.model";

export interface Habilidade{
    id?: number;
    pessoaId?: number;
    descricao?: string;
    nivelHabilidade?: NivelHabilidade;
}