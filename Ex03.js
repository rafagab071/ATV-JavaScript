function media_notas(x, y){

  var nota1 = parseInt(document.getElementById('nota1').value);
  var nota2 = parseInt(document.getElementById('nota2').value);
  var media = (nota1+nota2)/2;

  switch(true){
    case(media >= 9.5):
    window.alert("Média: " + media + " Excelente");
    break;

    case(media >= 8.5):
    window.alert("Média: " + media + " Ótimo");
    break;

    case(media >= 7.5):
    window.alert("Média: " + media + " Bom");
    break;

    case(media >= 6.0):
    window.alert("Média: " + media + " Regular")

    case(media < 6.0):
    window.alert("Média: " + media + " Insuficiente");
    break;

  }
}