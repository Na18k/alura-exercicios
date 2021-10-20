	// ========================================
    //
    // Professor Edutech: Vitor Atsushi Nozaki Yano
    // 
    // Aluno: Kainan Henrique C. dos Santos
    // Na18k(GitHub): https://github.com/Na18k
    //
    //  Exercício: Escreva um programa que lista todos os números primos até 1000.
    //
    // =======================================================
    // 2021 Na18k // Kainan Henrique C. dos Santos
    // =======================================================

    const numMaximo = 1000; // Limite estabelecido.

    let numerosPrimos = []; // Onde ficaram todos os números primos achados.

    // O 'for' faz um loop e define o número no qual será verificado "num" se ele é primo ou não.
    for(let num = 0; num <= numMaximo; num++) {

    	// Contador.
		let cont = 0;

		// esse 'for' fará o "i" a se resto com "num".
		for(let i = 0; i <= num; i++) {

			// Se "num" modulo por "i", for igual a 0.
			if(num % i == 0) {
				// se o modulo for igual a 0, então o contador "cont" é adicionado + 1.
				cont++;
			}
		}

		// Verifica se o contador é igual a dois.
		if(cont == 2) {
			// Insere o número feito pelo 1° 'for' na variavél "numerosPrimos".
			numerosPrimos.push(num);
		} 
	}

	//

	console.log('\n');
	console.log('Os numeros primos até ' + numMaximo + " são: " + numerosPrimos);
	console.log('\n');