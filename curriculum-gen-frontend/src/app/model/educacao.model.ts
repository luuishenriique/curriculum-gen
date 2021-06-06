import {TipoEducacao} from './tipo-educacao.model'
export interface Educacao{
    id: number;
    estabelecimento: string;
    dtInicio: Date;
    dtFim: Date;
    curso: string;
    tipo:number;
    descricao: string;
    nivel: TipoEducacao;


}