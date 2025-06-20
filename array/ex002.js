const dadosPessoa01 = ["Breno", "Masculino", 31];
console.log(`${dadosPessoa01}`);
console.log(dadosPessoa01.length);
console.log(dadosPessoa01[dadosPessoa01.length -1]);//Retorna o ultimo elemento dp Array

dadosPessoa01.push("Desenvolvedor Web");//Metodo de adição de elementos
dadosPessoa01[dadosPessoa01.length] = "Brasileiro";
console.log(dadosPessoa01);

console.log(Array.isArray(dadosPessoa01));//Metodo que mostra se e um array ou não