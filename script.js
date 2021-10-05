//Tienda 
//Creación de un array genérico a ordenar
arrayProductos = [
    {elemento: "Remera"},
    {elemento: "Llavero"},
    {elemento: "Taza"},
    {elemento: "Vincha"},
    {elemento: "Buzo"}
]

//Ordenar productos por orden alfabetico con arrow function
arrayProductos.sort((a, b) =>{
    if(a.elemento < b.elemento){
        return -1;
    }
    if (a.elemento > b.elemento){
        return 1;
    }
    return 0;
});

//Mostrar por consola el array ya ordenado
console.log (arrayProductos);






























