import { TipoCurso } from "./tipo-curso.model";

export interface Curso{
    id?: number;
    pessoaId?: number;
    instituicao?: string;
    curso?: string;
    dtInicio?: Date;
    dtFim?: Date;
    tipo?: TipoCurso;
}