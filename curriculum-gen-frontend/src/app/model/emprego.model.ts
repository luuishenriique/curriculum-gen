import { Referencia } from "./referencia.model";

export interface Emprego{
    id?: number;
    pessoaId?: number;
    empresa?: string;
    cargo?: string;
    dtInicio?: Date;
    dtFim?: Date;
    referencia?: Referencia;
}