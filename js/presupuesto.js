
document.getElementById('formulario').onclick = function () {
    let suma = 0;
    let presupuesto =0;

    let level = document.getElementById("level");
    let value = level.options[level.selectedIndex].value;
    let nivel = parseFloat(value);

    let size = document.getElementById("size");
    value = size.options[size.selectedIndex].value;
    let tamaño= parseFloat(value);

    let sabor = document.getElementById("sabor");
    value = sabor.options[sabor.selectedIndex].value;
    let gusto= parseFloat(value);

    let cobertura = document.getElementById("cobertura");
    value = cobertura.options[cobertura.selectedIndex].value;
    let cobert= parseFloat(value);

    let deco = document.getElementById("deco");
    value = deco.options[deco.selectedIndex].value;
    let decoracion= parseFloat(value);
    
    

    //solo voy a permitir que se vea el valor final si todos los campos fueron seleccionados
    if(nivel*tamaño*gusto*cobert*decoracion!=0){
        suma=tamaño+gusto+cobert+decoracion;
        presupuesto = nivel * suma; //considero que el factor del nivel multiplica las proporciones
    }
    
    document.getElementById("resultado").innerHTML = 'El presupuesto calculado es de:'+"<br>"+"$" + presupuesto;
}