import { IUsuario } from "../interfaces/IUsuário";
import { Conta } from "./conta/Conta";
import { Endereco } from "./Endereco";
import { Pessoa } from "./Pessoa";

export class Cliente extends Pessoa implements IUsuario {
    private _vip: boolean;
    private _enderecos: Endereco[];
    private _autenticado: boolean;
    private _contas: Conta[];

    constructor(_nome: string, _cpf: string, _telefone: string, _cep: string, _logradouro: string, _numero: string, _complemento: string, _cidade: string, _estado: string){
        super(_nome, _cpf, _telefone);
        this._enderecos = [new Endereco(1, _cep, _logradouro, _numero, _complemento, _cidade, _estado)];
        this._vip = false;
        this._autenticado = false;
        this._contas = []
    };

    // Getters
    public get vip() {
        return this._vip;
    };

    // Setters
    public set vip(novoStatus: boolean) {
        this._vip = novoStatus;
    };

    // Methods 
    public listarEnderecos(): Endereco[] | string {
        if(this._enderecos.length > 0) {
            return this._enderecos;
        } else {
            return 'Você não tem nenhum endereço cadastrado';
        };
    };
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

    public adicionarConta(conta: Conta) {
        this._contas.push(conta);
    };
};