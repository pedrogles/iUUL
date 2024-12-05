export abstract class Pessoa {
    private _nome: string;
    private _cpf: string;
    private _telefone: string;

    constructor(_nome: string, _cpf: string, _telefone: string) {
        this._nome = _nome;
        this._cpf = _cpf;
        this._telefone = _telefone;
    };

    // Getters
    public get nome(): string {
        return this._nome;
    };
    
    public get cpf(): string {
        return this._cpf;
    };

    public get telefone(): string {
        return this._telefone;
    };

    // Setters
    public set nome(novoNome: string) {
        this._nome = novoNome;
    };

    public set cpf(novoCpf: string) {
        this._cpf = novoCpf;
    };

    public set telefone(novoTelefone: string) {
        this._telefone = novoTelefone;
    };
};