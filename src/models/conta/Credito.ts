export class Credito {
    protected _valor: number;
    protected _data: Date;

    constructor(_valor: number) {
       this._valor = _valor;
       this._data = new Date();
    };

    // Getters
    public get valor(): number {
        return this._valor;
    }

    public get data(): Date {
        return this._data;
    }
};