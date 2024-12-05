export class Endereco {
    private _id: number;
    private _cep: string;
    private _logradouro: string;
    private _numero: string;
    private _complemento: string;
    private _cidade: string;
    private _estado: string;

    constructor(_id: number, _cep: string, _logradouro: string, _numero: string, _complemento: string, _cidade: string, _estado: string) {
        this._id = _id;
        this._cep = _cep;
        this._logradouro = _logradouro;
        this._numero = _numero;
        this._complemento = _complemento;
        this._cidade = _cidade;
        this._estado = _estado;
    };

    // Getters
    public get id(): number {
        return this._id;
    };

    public get cep(): string {
        return this._cep;
    };
    
    public get logradouro(): string {
        return this._logradouro;
    };

    public get numero(): string {
        return this._numero;
    };

    public get complemento(): string {
        return this._complemento;
    };

    public get cidade(): string {
        return this._cidade;
    };
    
    public get estado(): string {
        return this._estado;
    };
    // Setters
    public set cep(novoCep: string) {
        this._cep = novoCep;
    };

    public set logradouro(novoLogradouro: string) {
        this._logradouro = novoLogradouro;
    };

    public set numero(novoNumero: string) {
        this._numero = novoNumero;
    };

    public set complemento(novoComplemento: string) {
        this._complemento = novoComplemento;
    };

    public set cidade(novaCidade: string) {
        this._cidade = novaCidade;
    };

    public set estado(novoEstado: string) {
        this._estado = novoEstado;
    };
};