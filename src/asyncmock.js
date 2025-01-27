const productos = [
    {
        id: 1,
        imagen:'/assets/messi2.png',
        titulo: "Remera Lionel Messi retro",
        nombre:"nombre",
        precio: 40000
    },
    {
        id: 1,
        imagen:'/assets/messi2.png',
        titulo: "Remera Lionel Messi retro",
        nombre:"nombre",
        precio: 40000
    },
    {
        id: 1,
        imagen:'/assets/messi2.png',
        titulo: "Remera Lionel Messi retro",
        nombre:"nombre",
        precio: 40000
    },
    {
        id: 1,
        imagen:'/assets/messi2.png',
        titulo: "Remera Lionel Messi retro",
        nombre:"nombre",
        precio: 40000
    },
    {
        id: 1,
        imagen:'/assets/messi2.png',
        titulo: "Remera Lionel Messi retro",
        nombre:"nombre",
        precio: 40000
    },
    {
        id: 1,
        imagen:'/assets/messi2.png',
        titulo: "Remera Lionel Messi retro",
        nombre:"nombre",
        precio: 40000
    }
]

export const getProductos = () =>{
    return new Promise ((resolve) =>{
        setTimeout(()=>{
            resolve(productos)
        },1000)
    })
}

export const getVerProductos = (id) =>{
    return new Promise ((resolve) =>{
        setTimeout(()=>{
            const producto = productos.find(item => item.id === id);
            resolve(producto);
        },1000)
    })
}