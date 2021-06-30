import { Pessoa } from "../model/pessoa.model";
import { Endereco } from "../model/endereco.model";

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
        pessoa = { 
            "id": 1, 
            "nome": "Alejandro",
            "dtNasc": new Date("09/07/1989"), 
            "email": "alejandro_futebol@hotmail.com", 
            "celular": "x xxxx-xxxx", 
            "telefone": "xxxx-xxxx" ,
            "endereco":{
                "id": 1,
                "cep": "54783-010",
                "uf": "PE",
                "cidade": "Recife",
                "bairro": "Bairro Novo",
                "rua": "Rua Teste",
                "numero": "128"
            },
            redesSociais:[
                { 
                    "id": 1,
                    "nome": "Henrique Martins",
                    "link": "facebook.com/henrique"
                }
            ],
            empregos:[
                {
                    "id": 1,
                    "empresa": "Flexssonia",
                    "cargo": "Dev I",
                    "dtInicio": new Date('17/05/2021'),
                    "dtFim": new Date('01/01/1990'),
                    "referencia":{
                        "id": 1,
                        "nome": "Túlio",
                        "email": "tulio@gmail.com",
                        "celular": "x xxxx-xxxx"
                    }
                }
            ],
            cursos: [
                {
                    "id": 1,
                    "instituicao": "UNIS-MG",
                    "curso": "ADS",
                    "dtInicio": new Date('02/02/2015'),
                    "dtFim": new Date('10/08/2017'),
                    "tipo":{
                        "id": 4,
                        "descricao": "graduação"
                    }
                }
            ],
            habilidades:[
                { 
                    "id": 1,
                    "descricao": "Java",
                    "nivelHabilidade":{
                        "id": 0, 
                        "nivel": "iniciante"
                    }
                },
                { 
                    "id": 2,
                    "descricao": "Angular",
                    "nivelHabilidade":{
                        "id": 0, 
                        "nivel": "intermediário"
                    }
                }
            ]
        };

        //Através do comando push adicionamos um objeto a lista.
        pessoaList.push(pessoa)

        //Adição de mais um objeto a lista
        pessoa = { "id": 2, "nome": "André", "dtNasc": new Date("09/07/1989"), "email": "andre_d@hotmail.com", "celular": "x xxxx-xxxx", "telefone": "xxxx-xxxx" };
        pessoaList.push(pessoa)

        //Retorna a lista de pessoas.
        return pessoaList;
    }

    public getPessoaById(): Pessoa{
        let pessoa: Pessoa = { 
            "id": 1, 
            "nome": "Alejandro",
            "dtNasc": new Date("09/07/1989"), 
            "email": "alejandro_futebol@hotmail.com", 
            "celular": "x xxxx-xxxx", 
            "telefone": "xxxx-xxxx" ,
            "endereco":{
                "id": 1,
                "cep": "54783-010",
                "uf": "PE",
                "cidade": "Recife",
                "bairro": "Bairro Novo",
                "rua": "Rua Teste",
                "numero": "128"
            },
            redesSociais:[
                { 
                    "id": 1,
                    "nome": "Henrique Martins",
                    "link": "facebook.com/henrique"
                }
            ],
            empregos:[
                {
                    "id": 1,
                    "empresa": "Flexssonia",
                    "cargo": "Dev I",
                    "dtInicio": new Date('17/05/2021'),
                    "dtFim": new Date('01/01/1990'),
                    "referencia":{
                        "id": 1,
                        "nome": "Túlio",
                        "email": "tulio@gmail.com",
                        "celular": "x xxxx-xxxx"
                    }
                }
            ],
            cursos: [
                {
                    "id": 1,
                    "instituicao": "UNIS-MG",
                    "curso": "ADS",
                    "dtInicio": new Date('02/02/2015'),
                    "dtFim": new Date('10/08/2017'),
                    "tipo":{
                        "id": 4,
                        "descricao": "graduação"
                    }
                }
            ],
            habilidades:[
                { 
                    "id": 1,
                    "descricao": "Java",
                    "nivelHabilidade":{
                        "id": 0, 
                        "nivel": "iniciante"
                    }
                },
                { 
                    "id": 2,
                    "descricao": "Angular",
                    "nivelHabilidade":{
                        "id": 0, 
                        "nivel": "intermediário"
                    }
                }
            ]
        };
        return pessoa;
    }
}