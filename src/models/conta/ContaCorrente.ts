import { Conta } from "./Conta";
import { Credito } from "./Credito";
import { Debito } from "./Debito";

export class ContaCorrente extends Conta {
    private _limite: number;
    private _saldo: number;
    private _credito: Credito[];
    private _debito: Debito[];

    constructor() {
        super();
        this._saldo = 0;
        this._limite = 1000;
        this._credito = [];
        this._debito = [];
    };

    // Getters
    public get limite() {
        return this._limite;
    };

    public get saldo() {
        return this._saldo;
    };

    // Setters
    public set limite(novoLimite: number) {
        this._limite = novoLimite;
    };

    public set saldo(novoSaldo: number) {
        this._saldo = novoSaldo;
    };

    // Methods
    public transferir(contaDestino: Conta, valor: number) {
        this.calcularSaldo();
        if (valor > this._saldo + this._limite) {
            return "Você não tem saldo suficiente";
        }
        else if (this._saldo > valor) {
            this.sacar(valor);
            contaDestino.depositar(valor);
        }
        else if (this._saldo < valor && this._saldo + this._limite >= valor) {
            const valorMenosSaldo = valor - this._saldo;
            this._limite = this._limite - valorMenosSaldo;
            this.sacar(this._saldo);
            contaDestino.depositar(valor);
        } else {
            this.sacar(valor);
            contaDestino.depositar(valor);
        };
        this.calcularSaldo();
    };

    public calcularSaldo() {
       const debitoTotal = this._debito.reduce((acc, debito) => {
            return acc + debito.valor;
       }, 0)
       const creditoTotal = this._credito.reduce((acc, credito) => {
            return acc + credito.valor;
        }, 0)
       this._saldo = creditoTotal - debitoTotal;
    };

    public depositar(valor: number) {
        if (valor <= 0) {
            return "O valor do depósito deve ser maior que zero.";
        } else {
            const novoCredito = new Credito(valor);
            this._credito.push(novoCredito);
            this.calcularSaldo();
        };
    };

    public sacar(valor: number) {
        this.calcularSaldo();
        if (valor > this._saldo + this._limite) {
            return "O valor de saque deve ser maior ou igual a seu saldo."
        } else {
            const novoDebito = new Debito(valor);
            this._debito.push(novoDebito);
        };
        this.calcularSaldo();
    };
};