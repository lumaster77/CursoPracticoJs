const precioOriginal = 120;
const descuento = 18;
const cupones =[
    {
        text: "JoseCupon",
        porcentaje: 10
    },
    {
        text: "Cupon1",
        porcentaje: 15
    },
    {
        text: "Cupon25",
        porcentaje: 25
    },
    
]
const calcularPrecioConDescuento = (precio, descuento) => {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

const CalculateDiscount = ()=>{
    const Price = document.getElementById("Price").value;
    const Discount = document.getElementById("Discount").value;
    const ResultP = document.getElementById("ResultP");
    const Cupon = document.getElementById("Cupon").value;
    var precioConDCupon = 0
    

    const precioConDescuento = calcularPrecioConDescuento(Price,Discount);
    const Usercupon = cupones.find(Cupones)
    if(Usercupon){
        const desc = Usercupon.porcentaje;
        console.log(precioConDescuento +" "+ desc)
        precioConDCupon = calcularPrecioConDescuento(precioConDescuento, desc)
    }else{
        precioConDCupon = precioConDescuento
        alert("El cupon"+ Cupon + "no es valido")
    }
    ResultP.innerText = "El precio con descuento son $" + precioConDCupon;

}

const Cupones = (cupon) =>{
    const Cupon = document.getElementById("Cupon").value;
    return cupon.text === Cupon
}
// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// })