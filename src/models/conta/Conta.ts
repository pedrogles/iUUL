import { Credito } from "./Credito";
import { Debito } from "./Debito";

export abstract class Conta {
    private _numero: string;

    constructor() {
        this._numero = this.gerarNumero();
    };

    // Getters
    public get numero(): string {
        return this._numero;
    };
    
    // Methods
    private gerarNumero(): string {
        const numero = Math.floor(10000000 + Math.random() * 90000000);
        const diaDaSemana = new Date().getDay();
        const milisegundos = new Date().getMilliseconds();
        return `${diaDaSemana.toString().padStart(2, '0') + milisegundos.toString().padStart(2, '0')}-${numero}`;
    };

    public abstract depositar(valor: number): void;

    public abstract sacar(valor: number): void;
};