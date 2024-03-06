function nome_asc(n){
  let lista = [];
  let charcode = 65;
  let nome = document.getElementById('n').value;

  for (let i = 0; i < nome; i++){
    nome1 = prompt("Informe o nome ");
    lista.push(nome1);
  }

  lista.sort();

  let resultado = ""; // Inicializa uma string vazia

  for (let i = 0; i < nome; i++){
    let letra = String.fromCharCode(charcode);
    resultado += letra + ". " + lista[i].toUpperCase() + "\n"; // Adiciona cada nome à string
    charcode++;
  }

  window.alert(resultado); // Exibe a string completa no window.alert
}
