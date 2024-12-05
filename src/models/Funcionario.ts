import { IUsuario } from "../interfaces/IUsuário";
import { Cargo } from "./Cargo";
import { Pessoa } from "./Pessoa";

export class Funcionario extends Pessoa implements IUsuario {
    private _salario: number;
    private _cargo: Cargo[] = [];
    private _autenticado: boolean;

    constructor(_nome: string, _cpf: string, _telefone: string, _cargo: string, _salario: number) {
        super(_nome, _cpf, _telefone);
        this._salario = _salario;
        this._cargo = [new Cargo(1, _cargo)];
        this._autenticado = false;
    };

    // Getters
    public get salario() {
        return this._salario;
    };

    public get cargo(): Cargo[] {
        return this._cargo;
    };

    // Setters
    public set salario(novoSalario: number) {
        this._salario = novoSalario;
    };
    
    // Methods
    public adicionarCargo(cargo: string): void {
        if(this._cargo.length === 0) {
            const novoCargo = new Cargo(1, cargo);
            this._cargo.push(novoCargo);
        } else {
            const id = this._cargo[this._cargo.length - 1].id + 1;
            const novoCargo = new Cargo(id, cargo);
            this._cargo.push(novoCargo);
        };
    };
    
    public removerCargo(id: number) {
        const novaLista = this._cargo.filter(cargo => cargo.id !== id);
        this._cargo = novaLista;
    };

    public autenticar(): void {
        this._autenticado = true;
    };
};