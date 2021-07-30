//Codigo del cuadrado

const perimetroCuadrado = (lado) => lado * 4 ;
const areaCuadrado = (lado) => lado * lado ;

// Codigo del triangulo
const perimetroTriangulo = (lado1, lado2, base)  => lado1 + lado2 +base;
const areaTriangulo = (base, altura) =>  (base * altura) / 2;
const alturaTriangulo =(lado, base) => Math.sqrt((Math.pow(lado,2)-(Math.pow((base/2),2))))

//Codigo circulo
const diametroCirculo = (radio) => radio * 2;
const PI = Math.PI;
const PerimetroCirculo = (radio) => diametroCirculo(radio) * PI;
const areaCirculo = (radio) => (radio * radio) * PI;

// --- /cuadrado
const calcularresCuadrado = () =>{
    const input = document.getElementById("LadoCuadrado");
    const value =input.value
    const res = areaCuadrado(value);

    alert(res)
}
const calcularPerimetroCuadrado = () =>{
    const input = document.getElementById("LadoCuadrado");
    const value =input.value
    const res = perimetroCuadrado(value);

    alert(res)
}
// -- /triangulo
const calcularPerimetroTriangulo = () =>{
    const ladoA = parseInt(document.getElementById("LadoATriangulo").value);
    const ladoB = parseInt(document.getElementById("LadoBTriangulo").value);
    const base = parseInt(document.getElementById("BaseTriangulo").value);
    const res = perimetroTriangulo(ladoA, ladoB,base);

    alert(res)
}
const calcularAreaTriangulo = () =>{
    const altura = document.getElementById("AlturaTriangulo").value;
    const base = document.getElementById("BaseTriangulo").value;
    const res = areaTriangulo(base, altura)

    alert(res)
}
const calcularAlturaTriangulo = () =>{
    const ladoA = document.getElementById("LadoATriangulo").value;
    const ladoB = document.getElementById("LadoBTriangulo").value;
    const base = document.getElementById("BaseTriangulo").value;
    if(ladoA != ladoB){
        alert("no se puede calcular el altura son diferentes los lados")
    }else{
        const res = alturaTriangulo(ladoA,base)
        alert(res)
    }
}
const calcularPerimetroCirculo = () =>{
    const input = document.getElementById("radio");
    const value =input.value
    const res = PerimetroCirculo(value);

    alert(res)
}
const calcularAreaCirculo = () =>{
    const input = document.getElementById("radio");
    const value =input.value
    const res = areaCirculo(value);

    alert(res)
}
const calcularDiametroCirculo = () =>{
    const input = document.getElementById("radio");
    const value =input.value
    const res = diametroCirculo(value);

    alert(res)
}