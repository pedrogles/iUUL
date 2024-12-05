export class Cargo {
    private _id: number;
    private _nome: string;

    constructor(_id: number, _nome: string) {
        this._id = _id;
        this._nome = _nome;
    };

    // Getters
    public get id(): number {
        return this._id;
    };
    
    public get nome(): string {
        return this._nome;
    };

    // Setters
    public set nome(novoNome: string) {
        this._nome = novoNome;
    };
};