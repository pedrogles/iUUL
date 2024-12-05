import { IUsuario } from "../interfaces/IUsuário";
import { Endereco } from "./Endereco";
import { Pessoa } from "./Pessoa";

export class Cliente extends Pessoa implements IUsuario {
    private _vip: boolean;
    private _enderecos: Endereco[] = [];
    private _autenticado: boolean;

    constructor(_nome: string, _cpf: string, _telefone: string){
        super(_nome, _cpf, _telefone);
        this._vip = false;
        this._autenticado = false;
    };

    // Getters
    public get vip() {
        return this._vip;
    };

    public get enderecos(): Endereco[] | string {
        if(this._enderecos.length > 0) {
            return this._enderecos;
        } else {
            return 'Você não tem nenhum endereço cadastrado';
        };
    };

    // Setters
    public set vip(novoStatus: boolean) {
        this._vip = novoStatus;
    };

    // Methods 
    public adicionarEndereço(cep: string, logradouro: string, numero: string, complemento: string, cidade: string, estado: string) {
        if(this._enderecos.length === 0) {
            const novoEndereço = new Endereco(1, cep, logradouro, numero, complemento, cidade, estado);
            this._enderecos.push(novoEndereço);
        } else {
            const id = this._enderecos[this._enderecos.length - 1].id + 1;
            const novoEndereço = new Endereco(id, cep, logradouro, numero, complemento, cidade, estado);
            this._enderecos.push(novoEndereço);
        };
    };
    
    public removerEndereço(id: number) {
        const novaLista = this._enderecos.filter(endereco => endereco.id !== id);
        this._enderecos = novaLista;
    };

    public autenticar(): boolean {
        this._autenticado = true;
        return true;
    };
};