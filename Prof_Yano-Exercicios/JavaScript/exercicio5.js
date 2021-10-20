	// ========================================
    //
    // Professor Edutech: Vitor Atsushi Nozaki Yano
    // 
    // Aluno: Kainan Henrique C. dos Santos
    // Na18k(GitHub): https://github.com/Na18k
    //
    //  Exercício:  Crie uma classe Produto, que deve possuir os seguintes atributos:
    //              nome do produto, código, quantidade em estoque. 
    //              Além disso, a classe deve possuir os métodos comprar e vender,
    //              que devem atualizar a quantidade em estoque e o caixa da loja.
    //
    // =======================================================
    // 2021 Na18k // Kainan Henrique C. dos Santos
    // =======================================================

    class produto {
        nomeDoProduto;
        codigo;
        quantidade;

        compra(valor) {
            this.quantidade += valor;
        }

        venda(valor) {
            this.quantidade -= valor;
        }
    }

    const tomate = new produto();
    tomate.nomeDoProduto = "Tomate";
    tomate.codigo = 123456789;
    tomate.quantidade = 10;

    console.log('\n');
    console.log("Produtos:");
    console.log(tomate);
    console.log('\n');

    console.log('7 Tomates foram vendidos')
    tomate.venda(7);
    console.log("Quantidades de tomates: " + tomate.quantidade);
    console.log('\n');

    console.log('Depois foi comprado 15 tomates');
    tomate.compra(15);
    console.log("Quantidades de tomates: " + tomate.quantidade);
    console.log('\n');
