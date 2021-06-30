import { Curso } from "./curso.model";
import { Emprego } from "./emprego.model";
import { Endereco } from "./endereco.model";
import { Habilidade } from "./habilidade.model";
import { RedeSocial } from "./rede-social.model";

export interface Pessoa{
    id?: number;
    nome?: string;
    cpf?: string;
    dtNasc?: Date;
    email?: string;
    celular?: string;
    telefone?: string;
    endereco?: Endereco;
    redesSociais?: Array<RedeSocial>;
    empregos?: Array<Emprego>;
    cursos?: Array<Curso>;
    habilidades?: Array<Habilidade>;
}