const prompt = require('prompt-sync')();

function exercicio01() {
    let quant = parseInt(prompt('Quantos cigarros fumados por dia? '));
    let anos = parseInt(prompt('Há quantos anos fuma? '));

    diasPerdidos(quant, anos);

    function diasPerdidos(cigarros, anos) {
        while (cigarros < 0 || isNaN(cigarros)) {
            cigarros = parseInt(prompt('Digite um valor válido de cigarros: '));
        }
        while (anos < 0 || isNaN(anos)) {
            anos = parseInt(prompt('Digite um valor válido de anos: '));
        }
        minutosPorDia = cigarros * 10;
        minutosPorAno = minutosPorDia * 365;
        horasPorAno = minutosPorAno / 60;
        diasPorAno = horasPorAno / 24;
        diasNoTotal = Math.round(diasPorAno * anos); 
        return console.log('Você perdeu ' + diasNoTotal + ' dias de vida.');
    }
}

function exercicio02() {
    let velocidade = parseInt(prompt('Qual a velocidade do carro em quilometros? '));
    verificarVelocidade(velocidade);

    function verificarVelocidade(velocidade) {
        while (velocidade < 0 || isNaN(velocidade)) {
            velocidade = parseInt(prompt('Digite um valor válido em quilometros: '));
        }
        if (velocidade > 80) {
            valorMulta = (velocidade - 80) * 5;
            console.log('Você foi multado em R$ ' + valorMulta + '.');
        } else {
            console.log('Você está dentro do limite de velocidade.');
        }
    }
}

function exercicio03() {
    let quantKm = parseInt(prompt('Quantos quilometros você deseja viajar? '));
    calculaPrecoViagem(quantKm);
    function calculaPrecoViagem(km) {
        while (km < 0 || isNaN(km)) {
            km = parseInt(prompt('Digite um valor válido em quilometros: '));
        }    
        if (km <= 200) {
            preco = km * 0.5;
        } else {
            preco = km * 0.45;
        }
        return console.log('O preço da viagem é de ' + preco + 'R$.');
    }
}

function exercicio04() {
    let lado1 = prompt('Digite o primeiro lado da reta: ');
    let lado2 = prompt('Digite o segundo lado da reta: ');
    let lado3 = prompt('Digite o terceiro lado da reta: ');
    
    verificaTriangulo(lado1, lado2, lado3);
    
    function verificaTriangulo(lado1, lado2, lado3){
        lado1 = verificaValorValido(lado1, 1);
        lado2 = verificaValorValido(lado2, 2);
        lado3 = verificaValorValido(lado3, 3);
        if(lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1){
            console.log('Os lados formam um triângulo.');
        } else {
            console.log('Os lados não formam um triângulo.');
        }
    }
    
    function verificaValorValido(lado, numeroLado){
        while (lado < 0 || isNaN(lado)) {
            lado = prompt('Digite um valor válido para o lado ' + numeroLado + ': ');
        }
        return lado;
    }
}

function exercicio05() {
    console.log('Digite 1 para pedra (1)');
    console.log('Digite 2 para papel (2)');
    console.log('Digite 3 para tesoura (3)');
    
    let opcaoParticipante = parseInt(prompt('Digite sua opção escolhida: '));
    let opcaoComputador = Math.floor(Math.random() * 3) + 1;
    verificaVencedor(opcaoParticipante, opcaoComputador)
    
    function verificaVencedor(opcaoParticipante, opcaoComputador) {
        while (opcaoParticipante < 1 || opcaoParticipante > 3) {
            console.log('Você digitou uma opção inválida. Digite novamente.');
            opcaoParticipante = parseInt(prompt('Digite uma opção válida: '));
        }
        if (opcaoParticipante === opcaoComputador){
            console.log('Empate!')
        } else if (opcaoParticipante === 1 && opcaoComputador === 3 || opcaoParticipante === 2 && opcaoComputador === 1 || opcaoParticipante === 3 && opcaoComputador === 2){
            console.log('-- Você venceu! --')
        } else {
            console.log('-- Você perdeu! --')
        }
        console.log('Você escolheu ' + verificaOpcao(opcaoParticipante));
        console.log('O computador escolheu ' + verificaOpcao(opcaoComputador));
    }
    
    function verificaOpcao(opcao) {
        switch (opcao) {
            case 1:
                return 'pedra'
                break;
            case 2:
                return 'papel'
                break;
            case 3:
                return 'tesoura'
                break;
        }
    
    }
}

function exercicio06() {
    function jogoAcertaNum() {
        let numSorteado = Math.floor(Math.random() * 5) + 1;
        console.log(numSorteado);
        let tentativa = 0;
    
        while (tentativa !== numSorteado) {
            tentativa = parseInt(prompt('Tente adivinhar o número sorteado entre 1 e 5: '));
            if (tentativa < 1 || tentativa > 5) {
                console.log('Número inválido. Tente novamente.');
            }
        }
        console.log('Parabéns, você acertou! O número sorteado foi ' + numSorteado + '.');
    }
    jogoAcertaNum();
}

function exercicio07() {
    letTipoCarro = prompt('Qual tipo de carro você alugou: ');
    letDias = parseInt(prompt('Quantos dias você utilizou o carro: '));
    letKmPercorrido = parseInt(prompt('Quantos km você percorreu com o carro: '));
    cobraAluguelCarro(letTipoCarro, letDias, letKmPercorrido);
    function cobraAluguelCarro(tipoCarro, dias, km) {
        if (tipoCarro === 'popular' || tipoCarro === 'Popular') {
            cobraAluguelPopular(dias, km);
        }else {
            cobraAluguelLuxo(dias,km);
        }
    }
    function cobraAluguelPopular(dias, km) {
        let valorAluguel = 0;
        if (km <= 100) {
            valorAluguel = (90 * dias) + (0.20 * km);
        } else {
            valorAluguel = (90 * dias) + (0.10 * km);
        }
        return console.log('O valor do aluguel do carro ficou em: ' + valorAluguel + 'R$.');
    }
    function cobraAluguelLuxo(dias, km) {
        let valorAluguel = 0;
        if (km <= 200) {
            valorAluguel = (150 * dias) + (0.30 * km);
        } else {
            valorAluguel = (150 * dias) + (0.25 * km);
        }
        return console.log('O valor do aluguel do carro ficou em: ' + valorAluguel + 'R$.');
    }
}

function exercicio08() {
    let horasExercicio = parseInt(prompt('Quantas horas você se exercitou esse mês: '));
    calculaPontos(horasExercicio);
    function calculaPontos(horasExercicio) {
        let pontos = 0;
        let recompensa = 0;
        if (horasExercicio <= 10) {
            pontos = horasExercicio * 2;
        } else if (horasExercicio > 10 && horasExercicio <= 20) {
            pontos = horasExercicio * 5;
        } else {
            pontos = horasExercicio * 10;
        }
        recompensa = pontos * 0.05;
        return console.log('Você ganhou ' + pontos + ' pontos e sua recompensa ficou em ' + recompensa + 'R$.')
    }
}

function exercicio09() {
    let continua = true;
    let feminino = 0;
    let masculino = 0;
    let salarioFeminino = 0;
    let salarioMasculino = 0;
    
    function calculaMediaSalarial() {
        while (continua) {
            let sexo = prompt('Qual o sexo do funcionário (digite M/F): ');
            if (sexo === 'F' || sexo === 'f') {
                feminino++;
                salarioFeminino += parseFloat(prompt('Qual o salário da funcionária: '));
            } else if (sexo === 'M' || sexo === 'm'){
                masculino++;
                salarioMasculino += parseFloat(prompt('Qual o salário do funcionário: '));
            } else {
                console.log('Sexo inválido, digite M para masculino e F para feminino! ');
                continue;
            }
            let continuar = prompt('Deseja continuar? Digite S para sim e N para não: ');
            if (continuar === 'N' || continuar === 'n') {
                continua = false;
            }
        }
    
        let mediaFeminino = salarioFeminino / feminino;
        let mediaMasculino = salarioMasculino / masculino;
    
        console.log('A média salarial das funcionárias mulheres é de ' + mediaFeminino + 'R$');
        console.log('A média salarial dos funcionários homens é de ' + mediaMasculino + 'R$');
    }
    calculaMediaSalarial();
}

function exercicio10() {
    continua = true;
    soma = 0
    menorNum = Infinity;
    numPares = 0;
    totalNum = 0;
    function numerosAleatorios() {
        do {
            let num = parseFloat(prompt('Digite um número: '));
            soma += num;
            totalNum++;
            if (num < menorNum) {
                menorNum = num;
            }
    
            if (num % 2 === 0) {
                numPares++;
            }
            
            let continuar = prompt('Deseja continuar? Digite S para sim e N para não: ');  
            if (continuar === 'N' || continuar === 'n') {
                continua = false;
            }
    
        } while (continua);
        let media = soma / totalNum;
    
        console.log('A soma entre todos os números digitados é de ' + soma);
        console.log('O menor número digitado foi ' + menorNum);
        console.log('A média dos números digitados é de ' + media);
        console.log('O total de números pares digitados é de ' + numPares);
    }
    numerosAleatorios();
}

function exercicio11() {
    let primeiroNum = parseInt(prompt('Digite o primeiro número da progressão aritmetica: '));
    let razao = parseInt(prompt('Digite a razão da progressão aritmetica: '));
    function progressaoAritmetica(primeiroNum, razao) {
        let soma = 0;
        let numerosDaPa = [];
        for (let i = 0; i < 10; i++) {
            let num = primeiroNum + razao * i;
            numerosDaPa.push(num);
            soma += num;
        }
        console.log('Os 10 primeiros números da progressão aritmética são: ' + numerosDaPa);
        console.log('A soma dos 10 primeiros números da progressão aritmética é de ' + soma);
    }
    progressaoAritmetica(primeiroNum, razao);
}

function exercicio12() {
    let fibonacci = [1, 1];
    for(let i = 2; i < 10; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    console.log(fibonacci);
}

function exercicio13() {
    function fibonacci(n) {
        let a = 1;
        let b = 0;
        let temp;
        while (n >= 0) {
            temp = a;
            a = a + b;
            b = temp;
            n--;
        }
        return b;
    }
    for(let i = 0; i < 15; i++) {
        console.log(fibonacci(i));
    }
}

function exercicio14() {
    function nomesInvertidos() {
        let listaNomes = [];
        for(let i = 0; i < 7; i++) {
            let nome = prompt('Digite um nome: ');
            listaNomes.push(nome);
        }
    
        listaNomes.reverse();
        for (let i = 0; i < listaNomes.length; i++) {
            console.log(listaNomes[i]);
        }
    }
    nomesInvertidos();
}

function exercicio15() {
    function preencheVetor() {
        let vetorNum = [];
        for (let i = 0; i < 10; i++) {
            let num = parseInt(prompt('Digite um número inteiro: '));
            vetorNum.push(num);
        }
        mostraParesVetor(vetorNum);
    }
    function mostraParesVetor(vetorNum) {
        for (let i = 0; i < vetorNum.length; i++) {
            if(vetorNum[i] % 2 === 0){
                console.log('O número ' + vetorNum[i] + ' é par e esta na posição ' + i + ' do vetor.');
            }
        }
    }
    preencheVetor();
}

function exercicio16() {
    let numeros = [];
    for (let i = 0; i < 20; i++){
        let numero = Math.floor(Math.random() * 100);
        numeros.push(numero);
    }
    console.log('Os números recebidos foram: ' + numeros);
    numeros.sort((a, b) => a - b);
    console.log('Os números ordenados são: ' + numeros); 
}

function exercicio17() {
    let nomes = [];
    let idades = [];
    
    for (let i = 0; i < 9; i++) {
        let nome = prompt('Digite um nome: ');
        nomes.push(nome);
        let idade = parseInt(prompt('Digite a idade de ' + nome + ': '));
        idades.push(idade);
    }
    
    for (let i = 0; i < idades.length; i++) {
        if (idades[i] < 18) {
            console.log(nomes[i] + ' é menor de idade, tem ' + idades[i] + ' anos. ');
        }
    }
}

function exercicio18() {
    function registroFuncionario(){ 
        let funcionario = {
            nome: "",
            cargo: "",
            salario: 0
        };
        funcionario.nome = prompt('Digite o nome do funcionário: ');
        funcionario.cargo = prompt('Digite o cargo do funcionário: ');
        funcionario.salario = parseFloat(prompt('Digite o salário do funcionário: '));
    
        console.log('O nome do funcionário é ' + funcionario.nome);
        console.log('O cargo de ' + funcionario.nome + ' é ' + funcionario.cargo);
        console.log('O salário de ' + funcionario.nome + ' é ' + funcionario.salario);
    }
    registroFuncionario();
}

function exercicio19() {
    function validaHorario (horario) {
        let partes = horario.split(".");
        if (partes.length !== 3) {
            return false;
        }
        let horas = parseInt(partes[0]);
        let minutos = parseInt(partes[1]);
        let segundos = parseInt(partes[2]);
        if (isNaN(horas) || isNaN(minutos) || isNaN(segundos)) {
            return false;
        }
        if (horas < 0 || horas > 23 || minutos < 0 || minutos > 59 || segundos < 0 || segundos > 59) {
            return false;
        }
        return true;
    }
    
    let horarios = [];
    for (let i = 0; i < 5; i++) {
        let horario;
        do {
            horario = prompt('Digite um horário no seguinte formato HH.MM.SS: ');
            if (!validaHorario(horario)) {
                console.error('Horário inválido. Tente novamente.');
            }
        } while (!validaHorario(horario));
        horarios.push(horario);
    }
    for (let horario of horarios) {
        console.log(horario);
    }
}

function exercicio20() {
    let funcionarios = [
        { matricula: 1, nome: 'Funcionário 1', salarioBruto: 5072 },
        { matricula: 2, nome: 'Funcionário 2', salarioBruto: 9675 },
        { matricula: 3, nome: 'Funcionário 3', salarioBruto: 5791 },
        { matricula: 4, nome: 'Funcionário 4', salarioBruto: 5151 },
        { matricula: 5, nome: 'Funcionário 5', salarioBruto: 8864 },
        { matricula: 6, nome: 'Funcionário 6', salarioBruto: 5005 },
        { matricula: 7, nome: 'Funcionário 7', salarioBruto: 8225 },
        { matricula: 8, nome: 'Funcionário 8', salarioBruto: 5684 },
        { matricula: 9, nome: 'Funcionário 9', salarioBruto: 5827 },
        { matricula: 10, nome: 'Funcionário 10', salarioBruto: 5126 },
        { matricula: 11, nome: 'Funcionário 11', salarioBruto: 9225 },
        { matricula: 12, nome: 'Funcionário 12', salarioBruto: 5480 },
        { matricula: 13, nome: 'Funcionário 13', salarioBruto: 4486 },
        { matricula: 14, nome: 'Funcionário 14', salarioBruto: 5758 },
        { matricula: 15, nome: 'Funcionário 15', salarioBruto: 8576 },
        { matricula: 16, nome: 'Funcionário 16', salarioBruto: 8570 },
        { matricula: 17, nome: 'Funcionário 17', salarioBruto: 7029 },
        { matricula: 18, nome: 'Funcionário 18', salarioBruto: 9187 },
        { matricula: 19, nome: 'Funcionário 19', salarioBruto: 6116 },
        { matricula: 20, nome: 'Funcionário 20', salarioBruto: 8634 },
        { matricula: 21, nome: 'Funcionário 21', salarioBruto: 8770 },
        { matricula: 22, nome: 'Funcionário 22', salarioBruto: 5820 },
        { matricula: 23, nome: 'Funcionário 23', salarioBruto: 7110 },
        { matricula: 24, nome: 'Funcionário 24', salarioBruto: 6747 },
        { matricula: 25, nome: 'Funcionário 25', salarioBruto: 8401 },
        { matricula: 26, nome: 'Funcionário 26', salarioBruto: 8986 },
        { matricula: 27, nome: 'Funcionário 27', salarioBruto: 8986 },
        { matricula: 28, nome: 'Funcionário 28', salarioBruto: 4853 },
        { matricula: 29, nome: 'Funcionário 29', salarioBruto: 8320 },
        { matricula: 30, nome: 'Funcionário 30', salarioBruto: 5406 },
        { matricula: 31, nome: 'Funcionário 31', salarioBruto: 3619 },
        { matricula: 32, nome: 'Funcionário 32', salarioBruto: 8580 },
        { matricula: 33, nome: 'Funcionário 33', salarioBruto: 8970 },
        { matricula: 34, nome: 'Funcionário 34', salarioBruto: 8865 },
        { matricula: 35, nome: 'Funcionário 35', salarioBruto: 8370 },
        { matricula: 36, nome: 'Funcionário 36', salarioBruto: 3207 },
        { matricula: 37, nome: 'Funcionário 37', salarioBruto: 7414 },
        { matricula: 38, nome: 'Funcionário 38', salarioBruto: 5009 },
        { matricula: 39, nome: 'Funcionário 39', salarioBruto: 9172 },
        { matricula: 40, nome: 'Funcionário 40', salarioBruto: 9191 },
        { matricula: 41, nome: 'Funcionário 41', salarioBruto: 5706 },
        { matricula: 42, nome: 'Funcionário 42', salarioBruto: 6478 },
        { matricula: 43, nome: 'Funcionário 43', salarioBruto: 9156 },
        { matricula: 44, nome: 'Funcionário 44', salarioBruto: 4458 },
        { matricula: 45, nome: 'Funcionário 45', salarioBruto: 7825 },
        { matricula: 46, nome: 'Funcionário 46', salarioBruto: 8885 },
        { matricula: 47, nome: 'Funcionário 47', salarioBruto: 8342 },
        { matricula: 48, nome: 'Funcionário 48', salarioBruto: 8603 },
        { matricula: 49, nome: 'Funcionário 49', salarioBruto: 6889 },
        { matricula: 50, nome: 'Funcionário 50', salarioBruto: 5698 },
        { matricula: 51, nome: 'Funcionário 51', salarioBruto: 5252 },
        { matricula: 52, nome: 'Funcionário 52', salarioBruto: 6852 },
        { matricula: 53, nome: 'Funcionário 53', salarioBruto: 3599 },
        { matricula: 54, nome: 'Funcionário 54', salarioBruto: 4502 },
        { matricula: 55, nome: 'Funcionário 55', salarioBruto: 8594 },
        { matricula: 56, nome: 'Funcionário 56', salarioBruto: 4554 },
        { matricula: 57, nome: 'Funcionário 57', salarioBruto: 9462 },
        { matricula: 58, nome: 'Funcionário 58', salarioBruto: 9241 },
        { matricula: 59, nome: 'Funcionário 59', salarioBruto: 9167 },
        { matricula: 60, nome: 'Funcionário 60', salarioBruto: 7233 },
        { matricula: 61, nome: 'Funcionário 61', salarioBruto: 6902 },
        { matricula: 62, nome: 'Funcionário 62', salarioBruto: 3027 },
        { matricula: 63, nome: 'Funcionário 63', salarioBruto: 5352 },
        { matricula: 64, nome: 'Funcionário 64', salarioBruto: 6370 },
        { matricula: 65, nome: 'Funcionário 65', salarioBruto: 8017 },
        { matricula: 66, nome: 'Funcionário 66', salarioBruto: 7534 },
        { matricula: 67, nome: 'Funcionário 67', salarioBruto: 8375 },
        { matricula: 68, nome: 'Funcionário 68', salarioBruto: 6768 },
        { matricula: 69, nome: 'Funcionário 69', salarioBruto: 3089 },
        { matricula: 70, nome: 'Funcionário 70', salarioBruto: 7823 },
        { matricula: 71, nome: 'Funcionário 71', salarioBruto: 3414 },
        { matricula: 72, nome: 'Funcionário 72', salarioBruto: 5212 },
        { matricula: 73, nome: 'Funcionário 73', salarioBruto: 6434 },
        { matricula: 74, nome: 'Funcionário 74', salarioBruto: 3524 },
        { matricula: 75, nome: 'Funcionário 75', salarioBruto: 8183 },
        { matricula: 76, nome: 'Funcionário 76', salarioBruto: 5429 },
        { matricula: 77, nome: 'Funcionário 77', salarioBruto: 5030 },
        { matricula: 78, nome: 'Funcionário 78', salarioBruto: 8666 },
        { matricula: 79, nome: 'Funcionário 79', salarioBruto: 8797 },
        { matricula: 80, nome: 'Funcionário 80', salarioBruto: 5837 }
      ];
    
    function calculaContraCheque(funcionario) {
        let descontoInss = (funcionario.salarioBruto * 0.12).toFixed(2);
        let salarioLiquido = (funcionario.salarioBruto - descontoInss).toFixed(2);
    
        console.log('-----------------------------------')
        console.log('Matrícula: ' + funcionario.matricula);
        console.log('Nome: ' + funcionario.nome);
        console.log('Salário bruto: ' + funcionario.salarioBruto);
        console.log('Dedução INSS: ' + descontoInss);
        console.log('Salário líquido: ' + salarioLiquido);
    }
    
    for(let funcionario of funcionarios) {
        calculaContraCheque(funcionario);
    }
}

function exercicio21() {
    let altura = parseFloat(prompt('Digite a altura: '));
    while (isNaN(altura) || altura <= 0) {
        console.log('Digite uma altura válida maior que 0!');
        altura = parseFloat(prompt('Digite a altura: '))
    }
    let genero = prompt('Digite o gênero M para masculino e F para feminino: ').toUpperCase();
    while (genero !== 'M' && genero !== 'F') {
        console.log('Digite um gênero válido!');
        genero = prompt('Digite o gênero M para masculino e F para feminino: ').toUpperCase();
    }
    function calculaPesoIdeal (alt, genero) {
        let pesoIdeal;
        if(genero === 'M'){
            pesoIdeal = (72.7 * alt) - 58;
        } else if (genero === 'F') {
            pesoIdeal = (62.1 * alt) - 44.7;
        }
        console.log('O peso ideal é: ' + pesoIdeal.toFixed(2) + ' kg.') 
    }
    
    calculaPesoIdeal(altura, genero);
}

function exercicio22() {
    function pesquisaPopulacao() {
        let totalFilhos = 0;
        let totalSalario = 0;
        let maiorSalario = 0;
        let pessoas = 0;
        let salarioAte350 = 0;
    
        while (true) {
            let salario = parseFloat(prompt('Digite o salário: '));
            let filhos = parseInt(prompt('Digite o número de filhos: '));
    
            totalSalario += salario;
            totalFilhos += filhos;
            pessoas++;
    
            if (salario > maiorSalario) {
                maiorSalario = salario;
            }
    
            if (salario <= 350) {
                salarioAte350++;
            }
    
            let continuar = prompt('Deseja cadastrar mais uma pessoa? Digite S para sim e N para não: ').toUpperCase();
            if (continuar === 'N') {
                break;
            }
        }
    
        let mediaSalario = totalSalario / pessoas;
        let mediaFilhos = totalFilhos / pessoas;
        let percentualAte350 = (salarioAte350 / pessoas) * 100;
    
        console.log('A média de salário da população de ' + pessoas + ' habitantes é de R$ ' + mediaSalario.toFixed(2));
        console.log('A média de filhos é de ' + mediaFilhos.toFixed(2) + ' filhos por habitante.');
        console.log('O maior salário é de R$ ' + maiorSalario.toFixed(2));
        console.log('O percentual de habitantes com salário até R$350,00 é de ' + percentualAte350.toFixed(2) + '%.');
    }
    pesquisaPopulacao();
}

function exercicio23() {
    var matrizIdentidade = [];
    for (var i = 0; i < 7; i++) {
        matrizIdentidade[i] = [];
        for (var j = 0; j < 7; j++) {
            if (i === j) {
                matrizIdentidade[i][j] = 1;
            } else {
                matrizIdentidade[i][j] = 0;
            }
        }
    }
    
    // Imprimir a matriz
    for (var i = 0; i < 7; i++) {
        console.log(matrizIdentidade[i].join(' '));
    }
}

function exercicio24() {
    let M = [
        [1, -2, 3, -4, 5, -6, 7, -8],
        [-1, 2, -3, 4, -5, 6, -7, 8],
        [1, -2, 3, -4, 5, -6, 7, -8],
        [-1, 2, -3, 4, -5, 6, -7, 8],
        [1, -2, 3, -4, 5, -6, 7, -8],
        [-1, 2, -3, 4, -5, 6, -7, 8]
    ];
    
    let vetorC = [];
    for(i = 0; i < 6; i++) {
        let count = 0;
        for(j = 0; j < 8; j++) {
            if(M[i][j] < 0) {
                count++;
            }
        }
        vetorC[i] = count;
    }
    
    console.log('Matriz M:');
    for(let i = 0; i < M.length; i++) {
        console.log(M[i].join(' '));
    }
    console.log('Vetor C:');
    console.log(vetorC);
}

function gerarMatriz(linhas, colunas) {
    let matriz = [];
    for(let i = 0; i < linhas; i++) {
        matriz[i] = [];
        for(let j = 0; j < colunas; j++) {
            matriz[i][j] = Math.floor(Math.random() * 10); // Gera um número aleatório de 0 a 9
        }
    }
    return matriz;
}

function imprimirMatriz(matriz) {
    console.log('Matriz gerada: ');
    for(let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join(' '));
    }
}

function exercicio25() {
    let matriz25 = gerarMatriz(15, 20)
    imprimirMatriz(matriz25)
    let somaColunas = [];
    for (let j = 0; j < matriz25[0].length; j++) {
        let soma = 0;
        for (let i = 0; i < matriz25.length; i++) {
            soma += matriz25[i][j];
        }
        somaColunas[j] = soma;
    }
    console.log('Soma das colunas: ');
    console.log(somaColunas.join(' '));
}

function exercicio26() {
    let matrizA26 = gerarMatriz(3,5);
    let matrizB26 = gerarMatriz(5, 3);
    let produtoC = [];
    
    for(let i = 0; i < matrizA26.length; i++) {
        produtoC[i] = [];
        for(let j = 0; j < matrizA26[i]. length; j++) {
            produtoC[i][j] = matrizA26[i][j] * matrizB26[j][i];
        }
    }
    console.log('Matriz A: ');
    imprimirMatriz(matrizA26);
    console.log('Matriz B: ');
    imprimirMatriz(matrizB26);
    console.log('Produto C: ');
    imprimirMatriz(produtoC);
}

function exercicio27() {
    let matrizM27 = gerarMatriz(6, 6);
    let valorA = 2;
    let V = [];
    
    for(let i = 0; i < matrizM27.length; i++) {
        for(let j = 0; j < matrizM27[i].length; j++) {
            V.push(matrizM27[i][j] * valorA);
        }
    }
    imprimirMatriz(matrizM27);
    console.log(V);
}

function exercicio28() {
    matriz28 = gerarMatriz(10, 10)
    console.log('Matriz gerada: ');
    imprimirMatriz(matriz28)
    somaElementos = somaElementos(matriz28)
    console.log('Soma dos elementos acima da diagonal principal: ' + somaElementos.somaAcimaDiagonal);
    console.log('Soma dos elementos abaixo da diagonal principal: ' + somaElementos.somaAbaixoDiagonal);

    function somaElementos(matriz) {
        let somaAcimaDiagonal = 0;
        let somaAbaixoDiagonal = 0;
    
        for(let i = 0; i < matriz.length; i++) {
            for(let j = 0; j < matriz[i].length; j++) {
                if(j > i) {
                    somaAcimaDiagonal += matriz[i][j];
                } else if(j < i) {
                    somaAbaixoDiagonal += matriz[i][j];
                }
            }
        }
    
        return {
            somaAcimaDiagonal,
            somaAbaixoDiagonal
        };
    }
}

function exercicio29() {
    matriz29 = gerarMatriz(5,5);
    console.log('Matriz gerada: ');
    imprimirMatriz(matriz29);
    
    let somaLinha4 = 0;
    let somaColuna2 = 0;
    let somaDiagonalPrincipal = 0;
    let somaTotal = 0;
    
    for(let i = 0; i < matriz29.length; i++) {
        for(let j = 0; j < matriz29[i].length; j++) {
            if(i == 3) somaLinha4 += matriz29[i][j];
            if(j == 1) somaColuna2 += matriz29[i][j];
            if(i == j) somaDiagonalPrincipal += matriz29[i][j];
            somaTotal += matriz29[i][j];
        }
    }
    
    console.log("Soma da linha 4: " + somaLinha4);
    console.log("Soma da coluna 2: " + somaColuna2);
    console.log("Soma da diagonal principal: " + somaDiagonalPrincipal);
    console.log("Soma total: " + somaTotal);
}

function exercicio30() {
    matriz30 = gerarMatriz(5, 5);
    console.log('Matriz gerada: ');
    imprimirMatriz(matriz30);
    
    let SL = new Array(5).fill(0);
    let SC = new Array(5).fill(0);
    
    for(let i = 0; i < matriz30.length; i++) {
        for(let j = 0; j < matriz30[i].length; j++) {
            SL[i] += matriz30[i][j];
            SC[j] += matriz30[i][j];
        }
    }
    
    console.log("Vetor SL (somas das linhas): ", SL);
    console.log("Vetor SC (somas das colunas): ", SC);
}

function exercicio31() {
    matrizV31 = gerarMatriz(30, 30);
    inteiroA = Math.floor(Math.random() * 10);
    console.log('Matriz gerada: ');
    imprimirMatriz(matrizV31);
    console.log('Número inteiro aleatório: ' + inteiroA);
    
    processMatriz(inteiroA, matrizV31);
    
    function processMatriz(A, V) {
        let count = 0;
        let X = [];
    
        for(let i = 0; i < V.length; i++) {
            X[i] = [];
            for(let j = 0; j < V[i].length; j++) {
                if(V[i][j] === A) {
                    count++;
                } else {
                    X[i].push(V[i][j]);
                }
            }
        }
    
        console.log("Número de valores iguais a " + A + " na matriz: " + count);
        console.log("Matriz X (elementos de V diferentes de " + A + "): ");
        imprimirMatriz(X);
    }
}

function exercicio32() {
    matriz32 = gerarMatriz(12,13);
    //console.log('Matriz gerada: ');
    processMatriz(matriz32);
    
    function processMatriz(M) {
        let modifiedM = [];
    
        for(let i = 0; i < M.length; i++) {
            let maxElement = Math.max(...M[i].map(Math.abs));
            modifiedM[i] = M[i].map(element => (element / maxElement).toFixed(2));
        }
    
        console.log("Matriz original M: ");
        imprimirMatriz(M);
        console.log("Matriz modificada: ");
        imprimirMatriz(modifiedM);
    }
}

function exercicio33() {
    matriz33 = gerarMatriz(3, 3);
    console.log('Matriz gerada: ');
    imprimirMatriz(matriz33);
    processMatriz(matriz33);
    
    function processMatriz(M) {
        let diagonalPrincipal = [];
        let diagonalSecundaria = [];
    
        for(let i = 0; i < M.length; i++) {
            diagonalPrincipal.push(M[i][i]);
            diagonalSecundaria.push(M[i][M.length - 1 - i]);
        }
    
        let mediaDiagonalSecundaria = diagonalSecundaria.reduce((a, b) => a + b, 0) / diagonalSecundaria.length;
    
        let resultado = diagonalPrincipal.map(element => element * mediaDiagonalSecundaria.toFixed(2));
    
        console.log("Resultado: ", resultado);
    }
}

function exercicio34() {
    matriz34 = gerarMatriz(4, 4);
    console.log('Matriz gerada: ');
    imprimirMatriz(matriz34);
    
    console.log('Matriz multiplicada pela diagonal principal: ');
    imprimirMatriz(multiplicarMatrizDiagonal(matriz34));
    
    function multiplicarMatrizDiagonal(matrix) {
        for (let i = 0; i < matrix.length; i++) {
            let diagonalElement = matrix[i][i];
            for (let j = 0; j < matrix[i].length; j++) {
                matrix[i][j] *= diagonalElement;
            }
        }
        return matrix;
    }
}

function exercicio35() {
    function gerarArrayAleatorio(n) {
        let array = [];
        for (let i = 0; i < n; i++) {
            array.push(Math.floor(Math.random() * 99) + 1);
        }
        return array;
    }
    
    array35 = gerarArrayAleatorio(30);
    console.log("Array gerado: ", array35);
    separaParImpar(array35);
    
    function separaParImpar(array) {
        let pares = [];
        let impares = [];
    
        for (let i = 0; i < array.length; i++) {
            if (array[i] % 2 === 0) {
                pares.push(array[i]);
                if (pares.length === 5) {
                    console.log("Vetor de números pares cheio: ", pares);
                    pares = [];
                }
            } else {
                impares.push(array[i]);
                if (impares.length === 5) {
                    console.log("Vetor de números ímpares cheio: ", impares);
                    impares = [];
                }
            } 
        }
        console.log("Conteúdo final do vetor de números pares: ", pares);
        console.log("Conteúdo final do vetor de números ímpares: ", impares);
    }
}

function exercicio36() {
    function verificarAcertos36(gabarito, apostadores) {
        for (let i = 0; i < apostadores.length; i++) {
            let acertos = 0;
            for (let j = 0; j < gabarito.length; j++) {
                if (gabarito[j] === apostadores[i].respostas[j]) {
                    acertos++;
                }
            }
            console.log("Número do apostador: " + apostadores[i].numero + ", Número de acertos: " + acertos);
            if (acertos === 13) {
                console.log("Parabéns, tu foi o GANHADOR");
            }
        }
    }
    
    let gabarito36 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    let apostadores = Array.from({length: 100}, (_, i) => ({numero: i + 1, respostas: Array.from({length: 13}, () => Math.floor(Math.random() * 13) + 1)}));
    console.log("Gabarito: " + gabarito36);
    verificarAcertos36(gabarito36, apostadores);
}

function exercicio37() {
    function verificarAcertos37(gabarito, alunos) {
        for (let i = 0; i < alunos.length; i++) {
            let acertos = 0;
            for (let j = 0; j < gabarito.length; j++) {
                if (gabarito[j] === alunos[i].respostas[j]) {
                    acertos++;
                }
            }
            console.log("Número do aluno: " + (i + 1) + ", Número de acertos: " + acertos);
            if (acertos >= 12) {
                console.log("APROVADO");
            } else {
                console.log("REPROVADO");
            }
        }
    }
    
    let gabarito37 = ['A', 'C', 'D', 'E', 'E', 'B', 'B', 'D', 'A', 'A', 'E', 'B', 'D', 'C', 'E', 'A', 'A', 'D', 'B', 'C'];
    let alunos = Array.from({length: 50}, (_, i) => ({numero: i + 1, respostas: Array.from({length: 20}, () => String.fromCharCode(Math.floor(Math.random() * 5) + 65))}));
    console.log("Gabarito: " + gabarito37);
    verificarAcertos37(gabarito37, alunos);
}

function exercicio38() {
    let vetor38 = [1, 2, 3, 5, 4, 6]; 
    function calcularOperacao(vetor) {
        console.log('1 - Soma dos elementos');
        console.log('2 - Produto dos elementos');
        console.log('3 - Média dos elementos');
        console.log('4 - Elementos ordenados em ordem crescente');
        console.log('5 - Mostre o vetor');
        let identificador = parseInt(prompt("Digite um número de 1 a 5: "));
    
        while (identificador < 1 || identificador > 5) {
            identificador = parseInt(prompt("Identificador inválido. Por favor, digite um número de 1 a 5:"));
        }
        switch(identificador) {
            case 1:
                let soma = vetor.reduce((a, b) => a + b, 0);
                console.log('A soma dos elementos é: ' + soma);
                break;
            case 2:
                let produto = vetor.reduce((a, b) => a * b, 1);
                console.log('O produto dos elementos é: ' + produto);
                break;
            case 3:
                let media = vetor.reduce((a, b) => a + b, 0) / vetor.length;
                console.log('A média dos elementos é: ' + media);
                break;
            case 4:
                let ordenado = vetor.sort((a, b) => a - b);
                console.log('Vetor ordenado: ' + ordenado);
                break;
            case 5:
                console.log('Vetor: ' + vetor);
                break;
        }
    } 
    calcularOperacao(vetor38);
}


function exercicio39() {
    function gerarNumeroAleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    let A = Array.from({length: 100}, () => gerarNumeroAleatorio(-100, 100)); // Vetor de exemplo com valores aleatórios entre -100 e 100
    
    
    function compactarVetor(A) {
        let B = A.filter(x => x > 0);
        return B;
    }
    
    let B = compactarVetor(A);
    console.log('Vetor original:');
    console.log(A);
    console.log('Vetor compactado:');
    console.log(B);
}

function exercicio40() {
    let resultadoOficial = [11, 20, 42, 9, 37]; 
    let apostas = Array.from({length: 50}, () => Array.from({length: 5}, () => Math.floor(Math.random() * 60) + 1)); 
    function verificarApostas(resultadoOficial, apostas) {
        for (let i = 0; i < apostas.length; i++) {
            let aposta = apostas[i];
            let acertos = aposta.filter(numero => resultadoOficial.includes(numero));
            if (acertos.length === 5) {
                console.log(`Aposta ${i+1}: Ganhador, aposta feita: ${aposta}`);
            } else {
                console.log(`Aposta ${i+1}: Perdedor, aposta feita: ${aposta}`);
            }
        }
    }
    
    console.log("Resultado oficial: " + resultadoOficial);
    verificarApostas(resultadoOficial, apostas);
}

function exercicio41() {
    let pessoa = {
        nome: "João",
        idade: 30
    };
    
    console.log(`Idade: ${pessoa.idade}`);
    pessoa.email = "joao@example.com";
    console.log(pessoa);
}

function exercicio42() {
    let dados = {
        numero: 328,
        texto: "Oiiiie",
        array1: [3, 2, 7],
        array2: ["y", "a", "s", "m", "i", "m"],
        objeto: { chave: "valor" }
    };
    
    function filtrarArrays(objeto) {
        let novoObjeto = {};
        for (let propriedade in objeto) {
            if (Array.isArray(objeto[propriedade])) {
                novoObjeto[propriedade] = objeto[propriedade];
            }
        }
        return novoObjeto;
    }
    let resultado = filtrarArrays(dados);
    console.log(resultado);
}

function exercicio43() {
    let obj1 = {
        a: 3,
        cumprimento: "oiii",
        c: ["y", "a", "s", "m", "i", "m"]
    };
    
    let obj2 = {
        c: 20,
        dia: 4
    };
    
    function combinarObjetos(obj1, obj2) {
        let novoObjeto = {...obj1, ...obj2};
        return novoObjeto;
    }
    
    let resultado = combinarObjetos(obj1, obj2);
    
    console.log(resultado);
}

function exercicio44() {
    let objeto = {
        apresentacao: "oiiieee",
        numero44: 2,
        umaVerdade: "yasmim a mais linda do mundo",
        verdade: true,
        tipoSanguineo: "a+ linda"
    };
    
    function contarPropriedadesString(objeto) {
        let contador = 0;
        for (let propriedade in objeto) {
            if (typeof objeto[propriedade] === "string") {
                contador++;
            }
        }
        return contador;
    }
    let resultado = contarPropriedadesString(objeto);
    console.log(objeto)
    console.log("Quantidade de strings no objeto: " + resultado);
}

function exercicio45() {
    let array45 = ["yasmim", "victor", "yasmim", "mayara", "victor", "yasmim"]; 

    function contarStrings(array) {
        let objeto = {};
        for (let i = 0; i < array.length; i++) {
            let string = array[i];
            if (objeto[string]) {
                objeto[string]++;
            } else {
                objeto[string] = 1;
            }
        }
        return objeto;
    }
    
    let resultado45 = contarStrings(array45);
    console.log(array45);
    console.log(resultado45);
}

function exercicio46() {
    let vendas = [
        { vendedor: "Yasmim", valor: 150 },
        { vendedor: "Mayara", valor: 500 },
        { vendedor: "Yasmim", valor: 780 },
        { vendedor: "Victor", valor: 430 },
        { vendedor: "Mayara", valor: 100 },
        { vendedor: "Victor", valor: 670 },
        { vendedor: "Yasmim", valor: 890 }
    ]; 
    
    function sumarizarVendas(vendas) {
        let totalVendasPorVendedor = {};
        for (let i = 0; i < vendas.length; i++) {
            let venda = vendas[i];
            if (totalVendasPorVendedor[venda.vendedor]) {
                totalVendasPorVendedor[venda.vendedor] += venda.valor;
            } else {
                totalVendasPorVendedor[venda.vendedor] = venda.valor;
            }
        }
        return totalVendasPorVendedor;
    }
    
    let resultado46 = sumarizarVendas(vendas);
    console.log(vendas);
    console.log(resultado46);
}

function exercicio47() {
    let objeto47 = {
        primeiro: 1,
        numeroFav: 24,
        anoNascimento: 2005
    }; 
    
    function transformarObjeto(objeto, funcao) {
        let novoObjeto = {};
        for (let propriedade in objeto) {
            novoObjeto[propriedade] = funcao(objeto[propriedade]);
        }
        return novoObjeto;
    }
    
    let resultado = transformarObjeto(objeto47, x => x * 2);
    console.log(objeto47);
    console.log("Objeto transformado com a função de multiplicar por 2:")
    console.log(resultado);
}

function exercicio48() {
    let inventarioLojaA = {
        "blusas": 5,
        "calcas": 10,
        "regatas": 20,
        "moletons": 15
    }; 
    
    let inventarioLojaB = {
        "moletons": 7,
        "bones": 10,
        "blusas": 20,
        "calcas": 12
    }; 
    
    function combinarInventarios(inventarioA, inventarioB) {
        let inventarioCombinado = {...inventarioA};
    
        for (let item in inventarioB) {
            if (inventarioCombinado[item]) {
                inventarioCombinado[item] += inventarioB[item];
            } else {
                inventarioCombinado[item] = inventarioB[item];
            }
        }
    
        return inventarioCombinado;
    }
    
    let resultado48 = combinarInventarios(inventarioLojaA, inventarioLojaB);
    console.log("Inventário A:");
    console.log(inventarioLojaA);
    console.log("Inventário B:");
    console.log(inventarioLojaB);
    console.log("Inventário Combinado:");
    console.log(resultado48);
}

function exercicio49() {
    let transacoes = [
        { id: 1, valor: 250, data: "2024-01-10", categoria: "Alimentacao" },
        { id: 2, valor: 150, data: "2024-01-06", categoria: "Transporte" },
        { id: 3, valor: 300, data: "2024-01-15", categoria: "Alimentacao" },
        { id: 4, valor: 250, data: "2024-01-23", categoria: "Lazer" },
        { id: 5, valor: 400, data: "2024-01-26", categoria: "Alimentacao" }
    ]; 
    
    function agruparTransacoesPorCategoria(transacoes) {
        let transacoesPorCategoria = {};
    
        for (let i = 0; i < transacoes.length; i++) {
            let transacao = transacoes[i];
            let categoria = transacao.categoria;
    
            if (!transacoesPorCategoria[categoria]) {
                transacoesPorCategoria[categoria] = { transacoes: [], subtotal: 0 };
            }
    
            transacoesPorCategoria[categoria].transacoes.push(transacao);
            transacoesPorCategoria[categoria].subtotal += transacao.valor;
        }
    
        return transacoesPorCategoria;
    }
    
    let resultado49 = agruparTransacoesPorCategoria(transacoes);
    
    console.log(JSON.stringify(resultado49, null, 2));
}