/*Avaliação -2 - Houve um vestibular para ingresso de alunos na instituição baseado em 
5 matérias: Natureza, Humanas, Linguagens, Matemática e Redação com notas de 0 a 1000.
Precisa-se de um sistema que cadastre o nome completo, número de inscrição,
ano de nascimento e as matérias com as notas dos vestibulandos de 5 até 20 pessoas.

A mensagem, nas matérias acima de 550; 
A mensagem "Reprovado'. nas matérias abaixo de 400: 
A mensagem " Recuperação" nas matérias entre 401 e 549. 
Exiba todos os dados cadastrados e os seus resultados na página HTML 

    • Todos os campos devem ser válidos e cumprir os requisitos mínimos de validação. 
    • Os anos de nascimento ficam entre 1901 e 2007. 
    • Número de Inscrição tem 10 dígitos sendo que deve começar com 2024XXXXXX.*/

    function Pagamentos(nomes = [], NUMEROi = [], ANONASC = [], notas = []) {
        let MATERIAS = ["Natureza", "Humanas", "Linguagens", "Matemática", "Redação"];
        let continuar = true;
        let contador = 0;
    
        do {
            contador++;
            let nome = prompt("Informe um Nome:");
            nome = nome.trim();
            while (nome === "" || nome.indexOf(" ") === -1) {
                alert("Nome Inválido");
                nome = prompt("Informe um Nome novamente:");
            }
            nomes.push(nome);
    
            let anonasc = prompt(`Informe o ano de nascimento de ${nome} (Apenas o ano)`);
            while (isNaN(anonasc) || anonasc < 1901 || anonasc > 2007) {
                alert("Ano inválido");
                anonasc = prompt(`Informe o ano de nascimento novamente:`);
            }
            ANONASC.push(parseFloat(anonasc));
    
            let numeroI = prompt(`Informe o número de inscrição de ${nome}`);
            while (isNaN(numeroI) || numeroI.length !== 6) {
                alert("Inscrição inválida");
                numeroI = prompt(`Informe o número de inscrição de ${nome} novamente (formato 6 caracteres)`);
            }
            NUMEROi.push(numeroI);
    
            let notasAluno = [];
            for (let i = 0; i < MATERIAS.length; i++) {
                let nota = prompt(`Informe a nota de ${MATERIAS[i]} (0 a 1000):`);
                while (isNaN(nota) || nota < 0 || nota > 1000) {
                    alert("Nota inválida. Deve estar entre 0 e 1000.");
                    nota = prompt(`Informe a nota de ${MATERIAS[i]} novamente:`);
                }
                notasAluno.push(parseFloat(nota));
            }
            notas.push(notasAluno);
    
            let somaNotas = notasAluno.reduce((acc, curr) => acc + curr, 0);
            let media = somaNotas / MATERIAS.length;
    
            if (contador > 4 && contador < 20) {
                continuar = confirm("Deseja continuar avaliando?");
            } else if (contador === 49) {
                continuar = false;
            }
    
            let mensagem = "";
            for (let i = 0; i < nomes.length; i++) {
                mensagem += "Nome: " + nomes[i] + "<br>";
                mensagem += "Ano de nascimento: " + ANONASC[i] + "<br>";
                mensagem += "N° de inscrição: " + 2024 + (NUMEROi[i]) + "<br><br>";
                //mensagem += "Notas Obtidas: " + notas[i].join(", ") + "<br>";
    
                
                if (media > 550) {
                    mensagem += "Resultado: Aprovado<br><br>";
                } else if (media < 400) {
                    mensagem += "Resultado: Reprovado<br><br>";
                } else if (media >= 401 && media <= 549) {
                    mensagem += "Resultado: Recuperação<br><br>";
                }
            }
            document.writeln(mensagem);
    
        } while (continuar);
    }
    
    Pagamentos();
    
    

