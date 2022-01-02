//este es el codigo del cuadrado
console.group("Cruadrados");
function perimetroCuadraro(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
}
console.groupEnd();

//este es el codigo del triangulo
console.group("Triangulos");
function alturaTriangulo(lado, base) {
  const altura = Math.sqrt(Math.pow(lado, 2) - Math.pow(base / 2, 2));
  return altura;
}

function perimetroTriangulo(lado1, lado2, base) {
  suma = lado1 + lado2 + base;
  return suma;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
console.groupEnd();

//este es el codigo del circulo
console.group("Circulos");
const PI = Math.PI;

function diametroCirculo(radio) {
  return radio * 2;
}

function circunferenciaCirculo(radio) {
  return diametroCirculo(radio) * PI;
}

function areaCirculo(radio) {
  return radio * radio * PI;
}
console.groupEnd();

//Interacción con HTML
//Funciones para cuadrado
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadraro(value);
  alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

//Funciones para triangulo
function calcularPerimetroTriangulo() {
  const inputLado1 = document.getElementById("InputTrianguloLado1");
  const inputLado2 = document.getElementById("InputTrianguloLado2");
  const inputBase = document.getElementById("InputTrianguloBase");
  const valueLado1 = inputLado1.value;
  const valueLado2 = inputLado2.value;
  const valueBase = inputBase.value;

  const lado1 = Number(valueLado1);
  const lado2 = Number(valueLado2);
  const base = Number(valueBase);

  const perimetro = perimetroTriangulo(lado1, lado2, base);
  alert(perimetro);
}

function calcularAreaTriangulo() {
  const inputLado1 = document.getElementById("InputTrianguloLado1");
  const inputBase = document.getElementById("InputTrianguloBase");
  const valueLado1 = inputLado1.value;
  const valueBase = inputBase.value;
  const altura = alturaTriangulo(valueLado1, valueBase);

  const area = areaTriangulo(valueBase, altura);
  alert(area);
}

function calcularAlturaTriangulo() {
  const inputLado1 = document.getElementById("InputTrianguloLado1");
  const inputBase = document.getElementById("InputTrianguloBase");
  const valueLado1 = inputLado1.value;
  const valueBase = inputBase.value;
  const altura = alturaTriangulo(valueLado1, valueBase);
  alert(altura);
}

//Funciones para circulos
function calcularDiametroCirculo() {
  const inputRadio = document.getElementById("InputCirculo");
  const value = inputRadio.value;
  const diametro = diametroCirculo(value);
  alert(diametro);
}

function calcularCircunferenciaCirculo() {
  const inputRadio = document.getElementById("InputCirculo");
  const value = inputRadio.value;
  const circunferencia = circunferenciaCirculo(value);
  alert(circunferencia);
}

function calcularAreaCirculo() {
  const inputRadio = document.getElementById("InputCirculo");
  const value = inputRadio.value;
  const area = areaCirculo(value);
  alert(area);
}
