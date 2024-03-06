function calculaIMC(peso, altura){
  var peso = document.getElementById('peso').value;
  var altura = document.getElementById('altura').value;
  let imc = peso/altura**2;
  
  switch(true){
    case (imc <= 18.5):
      window.alert( "Abaixo do peso");
      break;
      
    case (imc <= 24.9):
      window.alert( "Peso ideal (parabéns)");
      break;

    case (imc <= 29.9):
      window.alert( "Levemente acima do peso");
      break;
      
    case (imc <= 34.9):
      window.alert( "Obesidade grau I");
      break;
      
    case (imc <= 39.9):
      window.alert( "Obesidade grau II (severa)");
      break;
      
    case (imc >= 40):
      window.alert( "Obesidade III");
      break;
  }
}

