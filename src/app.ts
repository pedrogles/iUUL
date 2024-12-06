import { Cliente } from "./models/Cliente";
import { ContaCorrente } from "./models/conta/ContaCorrente";
import { ContaPoupanca } from "./models/conta/ContaPoupanca";
import { Funcionario } from "./models/Funcionario";

// 1. Crie dois funcionários do banco, um gerente e um atendente.
// const gerente = new Funcionario('Marcelino Pipoca', '33333333333', '99999932999', 'Gerente', 3500);
// const atendente = new Funcionario('Felipe Astoufo', '22222222222', '99943999999', 'Atendente', 1300);

// -------------------------------------------------------------------------------------------------------

// 2. Crie um cliente e adicione 3 endereços a ele e imprima os endereços deste cliente
// const cliente = new Cliente('Pedro', '11111111111', '83999999999', '58024440', 'Doutor Felipe Teixeira', '82', 'Casa', 'João Pessoa','Paraíba');
// cliente.adicionarEndereço('88888888', 'Marcelino Ferreira Marrocos', '104', 'Apartamento', 'São Paulo', 'São Paulo');
// cliente.adicionarEndereço('24234344', 'Poconotos Matatai', '347', 'Casa', 'Ribeirão Preto', 'São Paulo');
// console.log(cliente.listarEnderecos());

// -------------------------------------------------------------------------------------------------------

//3. Crie um cliente que possua uma ContaCorrente, Efetue três depósitos de 100 nessa ContaCorrente, Efetue um saque de 50 reais nessa ContaCorrente, Imprima o valor do saldo dessa ContaCorrente
// const cliente = new Cliente('Pedro', '11111111111', '83999999999', '58024440', 'Doutor Felipe Teixeira', '82', 'Casa', 'João Pessoa','Paraíba');
// const contaCorrente = new ContaCorrente();
// cliente.adicionarConta(conta1);
// contaCorrente.depositar(100);
// contaCorrente.depositar(100);
// contaCorrente.depositar(100);
// contaCorrente.sacar(50);
// console.log(contaCorrente.saldo);

// -------------------------------------------------------------------------------------------------------

//4. Crie um cliente que possua uma ContaCorrente, Efetue um depósito de 1000 nessa ContaCorrente, Crie um cliente que possua uma ContaPoupanca, Efetue um depósito de 1000 reais nesta ContaPoupanca, Efetue uma transferência de 500 reais da ContaCorrente para ContaPoupanca, Exiba o saldo das duas contas
// const cliente = new Cliente('Pedro', '11111111111', '83999999999', '58024440', 'Doutor Felipe Teixeira', '82', 'Casa', 'João Pessoa','Paraíba');
// const contaCorrente = new ContaCorrente();
// cliente.adicionarConta(contaCorrente);
// contaCorrente.depositar(1000);
// const contaPoupanca = new ContaPoupanca();
// cliente.adicionarConta(contaPoupanca);
// contaPoupanca.depositar(1000);
// contaCorrente.transferir(contaPoupanca, 500);
// console.log(contaCorrente.saldo);
// console.log(contaPoupanca.saldo);

// -------------------------------------------------------------------------------------------------------

//5. Crie um cliente que possua uma ContaCorrente, Efetue um depósito de 300 nessa ContaCorrente, Defina o valor do limite da ContaCorrete para 100 reais, Crie um cliente que possua uma ContaCorrente, Efetue um depósito de 100 reais nesta ContaCorrente, Tente efetuar uma transferência de 1000 reais da primeira ContaCorrente para a segunda ContaPoupanca
// const cliente1 = new Cliente('Pedro', '11111111111', '83999999999', '58024440', 'Doutor Felipe Teixeira', '82', 'Casa', 'João Pessoa','Paraíba');
// const contaCorrente1 = new ContaCorrente();
// cliente1.adicionarConta(contaCorrente1);
// contaCorrente1.depositar(300);
// contaCorrente1.limite = 100;

// const cliente2 = new Cliente('Pedro', '11111111111', '83999999999', '58024440', 'Doutor Felipe Teixeira', '82', 'Casa', 'João Pessoa','Paraíba');
// const contaCorrente2 = new ContaCorrente();
// cliente2.adicionarConta(contaCorrente2);
// contaCorrente2.depositar(100);

// contaCorrente1.transferir(contaCorrente2, 1000);

// console.log(cliente1);
// console.log(cliente2);

