const numeros = [1, 3, 5, 7]

//map cuando hay q modificar cada elemento del array y es como un for q recorre cada elemento del array
const duplicados = numeros.map(numero => numero * 2)

const valores = numeros.map(numero => numero / 2)

const usuariosAPI = [
    {id: 1, nombre: "pepito", activo: true},
    {id: 3, nombre: "hola", activo: false},
    {id: 1, nombre: "chau", activo: true}
]

const usuarios = usuariosAPI.map(usuario => ({
    identificador: usuario.id,
    nombreCompleto: usuario.nombre,
    estado: usuario.activo ? /*el ? significa si eso es igual a true devolve....*/ "Activo" : /*si no se cumple aparece lo que este despues de los :*/ "Inactivo"



}))

