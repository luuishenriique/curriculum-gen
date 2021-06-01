import { Pessoa } from "../model/pessoa.model";

export class PessoaService{

    /**
     * Método retorna todas as pessoas sem filtro
     * 
     * @returns pessoaList
     */
    public getAllPessoa(): Pessoa[]{
        //Forma de instânciar um array de pessoas no TypeScript
        let pessoaList: Pessoa[] = [];

        //Variável do tipo pessoa. Declarada na pasta Model.
        //Seguir o padrão
        let pessoa: Pessoa;
        //Variável setada de forma manual
        pessoa = { "id": 1, "nome": "Alejandro", "dtNasc": new Date("09/07/1989"), "email": "alejandro_futebol@hotmail.com", "ddd": "(xx)", "celular": "x xxxx-xxxx", "telefone": "xxxx-xxxx" };

        //Através do comando push adicionamos um objeto a lista.
        pessoaList.push(pessoa)

        //Adição de mais um objeto a lista
        pessoa = { "id": 2, "nome": "André", "dtNasc": new Date("09/07/1989"), "email": "andre_d@hotmail.com", "ddd": "(xx)", "celular": "x xxxx-xxxx", "telefone": "xxxx-xxxx" };
        pessoaList.push(pessoa)

        //Retorna a lista de pessoas.
        return pessoaList;
    }
}