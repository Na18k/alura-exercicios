    // ========================================
    //  
    // Professor Edutech: Vitor Atsushi Nozaki Yano
    // 
    // Aluno: Kainan Henrique C. dos Santos
    // Na18k(GitHub): https://github.com/Na18k
    //
    //  Exercício: Escreva um programa que lista as tabuadas do 1 ao 9.
    //
    // =======================================================
    // 2021 Na18k // Kainan Henrique C. dos Santos
    // =======================================================

    const numTabuadas = 9; //Quantidade de tabuadas
    const linhasTabuada = 10; // Linhas que cada tabuada terá

    // "For" que cria as tabuadas de um número
    for(let tabuada = 1; tabuada <= numTabuadas; tabuada++) {

        console.log('\n'); // Pula linha no console.
    	console.log("Tabuada do: " + tabuada); // Mostra em que tabuada está

        // 'For' que cria as linhas da tabuada.
    	for(let linha = 1; linha <= linhasTabuada; linha++) {

            // 'Console.log' que ira imprimir no console o resultado das multiplicações.
            console.log(linha * tabuada); 
    	}
    }