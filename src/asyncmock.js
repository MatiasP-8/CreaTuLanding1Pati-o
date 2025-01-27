const productos = [
    {
        id: 1,
        imagen:'/assets/messi2.png',
        titulo: "Remera Lionel Messi retro",
        nombre:"nombre",
        precio: 40000
    },
    {
        id: 2,
        imagen:'/assets/arsenal.png',
        titulo: "Remera Arsenal retro",
        nombre:"nombre",
        precio: 40000
    },
    {
        id: 3,
        imagen:'/assets/bocaRetro.png',
        titulo: "Remera Boca retro",
        nombre:"nombre",
        precio: 40000
    },
    {
        id: 4,
        imagen:'/assets/cristiano.png',
        titulo: "Remera Cristiano retro",
        nombre:"nombre",
        precio: 40000
    },
    {
        id: 5,
        imagen:'/assets/messiRetro.png',
        titulo: "Remera Lionel Messi retro",
        nombre:"nombre",
        precio: 40000
    },
    {
        id: 6,
        imagen:'/assets/kaka.png',
        titulo: "Remera Kaka retro",
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