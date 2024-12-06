export class Debito {
    private _valor: number;
    private _data: Date;

    constructor(valor: number) {
        this._valor = valor;
        this._data = new Date(); // Data do débito
    }

    // Getters
    public get valor(): number {
        return this._valor;
    }

    public get data(): Date {
        return this._data;
    }
}