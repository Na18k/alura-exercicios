	// ========================================
    //
    // Professor Edutech: Vitor Atsushi Nozaki Yano
    // 
    // Aluno: Kainan Henrique C. dos Santos
    // Na18k(GitHub): https://github.com/Na18k
    //
    //  Exercício: Escreva um programa que calcula o fatorial do número 20.
    //
    // =======================================================
    // 2021 Na18k // Kainan Henrique C. dos Santos
    // =======================================================

    const n = 20; // Número a ser fatorado.

    let fatorial = [n]; // Onde todos os números a serem calculados ficaram.

    let total = n; // Total da fatoração.

    for(let fator = n - 1; fator > 0; fator = fator - 1) {

		// Insere números em "fatorial", uma resolução.
    	fatorial.push(fator); 

    	// Caucula o fatorial em si.
    	total *= fator; 
    }
    fatorial.push(" = " + total); 

    console.log('\n' + "Resolução: " + fatorial);
    console.log('\n' + "Total: " + total);
    console.log('\n');

    // 20! = 20*19*18*17*16*15*14*13*12*11*10*9*8*7*6*5*4*3*2*1 = 2432902008176640000 (Resultado a ser obitido).