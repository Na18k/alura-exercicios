	// ========================================
    //
    // Professor Edutech: Vitor Atsushi Nozaki Yano
    // 
    // Aluno: Kainan Henrique C. dos Santos
    // Na18k(GitHub): https://github.com/Na18k
    //
    //  Exercício: Escreva um programa que calcula a soma de todos os números naturais até 1000.
    //
    // =======================================================
    // 2021 Na18k // Kainan Henrique C. dos Santos
    // =======================================================

    const numMaximo = 1000; // Número máximo até onde a soma pode ir.
    let total = 0; // Total da soma.

    for(let cont = 1; cont <= numMaximo; cont++) {
    	total += cont;
    }

    console.log(total);