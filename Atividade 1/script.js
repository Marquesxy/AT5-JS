/*Avaliação 1 - Crie um algoritmo de pagamento em que se cadastre os prestadores de 
serviço, pegando os seguintes dados: nome completo, um número do PIS/PASEP, o 
valor da Sua hora trabalhada e a quantidade de horas trabalhadas de 5 a 50 pessoas. 
No fim dos cadastros deve-se mostrar os dados, o valor bruto do serviço e o líquido 
descontado na página html dos cadastrados. 

    • Todos os campos devem ser válidos e cumprir os requisitos mínimos de validação. 
    • O valor da hora: mínimo de 20 reais e máximo de 500 reais. ✅
    • A quantidade de horas sempre estará entre 20 e 200 horas trabalhadas no mês.✅ 
    • O valor líquido do prestador de serviço tem descontos de impostos a recolher sendo 
    • o INSS (tabela), ISS (5%) e IR (tabela).*/

function FormatarPis(pis) {
    let pisFormato = pis.toString().padStart(11, '0');
    return `${pisFormato.slice(0, 3)}.${pisFormato.slice(3, 8)}.${pisFormato.slice(8, 10)}-${pisFormato.slice(10)}`;
}

function Pagamentos(nomes = [], salariosHE = [], PIS_PASEP = [], HT = []) {
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

        let salariohe = prompt(`Informe o valor da hora trabalhada de ${nome}`);
        while (isNaN(salariohe) || salariohe < 20 || salariohe > 500) {
            alert("Hora Inválida");
            salariohe = prompt(`Informe a hora trabalhada de ${nome} novamente:`);
        }
        salariosHE.push(parseFloat(salariohe));

        let pis_paesp = prompt(`Informe o PIS/PAESP do funcionário (formato de 11 numeros) ${nome}`);
        while (isNaN(pis_paesp) || pis_paesp.length !== 11) {
            alert("PIS/PAESP Inválido");
            pis_paesp = prompt(`Informe o PIS/PAESP de ${nome} novamente (formato original de 11 caracteres)`);
        }
        PIS_PASEP.push(pis_paesp); // Mantido como string

        let HorasTrabalho = prompt(`Informe as horas trabalhadas do funcionário ${nome}`);
        while (isNaN(HorasTrabalho) || HorasTrabalho < 20 || HorasTrabalho > 200) {
            alert("Hora de trabalho Inválida");
            HorasTrabalho = prompt(`Informe a hora trabalhada de ${nome} novamente`);
        }
        HT.push(parseFloat(HorasTrabalho));

        if (contador > 4 && contador < 50) {
            continuar = confirm("Deseja continuar o cadastro?");
        } else if (contador == 49) {
            continuar = false;
        }

        let mensagem = "";
        for (let i = 0; i < nomes.length; i++) {
            let soma = HT[i] * salariosHE[i];
            let desconto = soma * 0.20; //INSS 7,5% + ISS 5% e IR 7,5
            let Descontando = soma - desconto; // Subtrair o desconto do Valor Bruto
            mensagem += "Nome: " + nomes[i] + "<strong><br>";
            mensagem += "PIS/PAESP: " + FormatarPis(PIS_PASEP[i]) + "<br>";
            mensagem += "Horas trabalhadas: " + HT[i] + "<br>";
            mensagem += "Valor da hora extra: R$ " + salariosHE[i].toFixed(2) + "<br>";
            mensagem += "Valor Bruto: R$ " + soma.toFixed(2) + "<br>";
            mensagem += "Valor liquido: R$ " + Descontando.toFixed(2) + "<br><br>";
        }
        document.writeln(mensagem);

    } while (continuar);
}
Pagamentos();