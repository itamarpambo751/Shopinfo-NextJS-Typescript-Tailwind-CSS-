export interface Products {
    id: number
    tipo: string
    category:string
    name: string
    cod_post: string
    referencia: string
    marca: string
    price: string
    desconto: string
    quantidade: number
    img: string
}
export interface PCGamer {
    id:6
    tipo:string
    category:string
    name:string
    cod_post:string
    referencia:string
    informations:{
    processador:string
    marca:string[]
    price:string
    desconto:string
    memoria:string
    HD:string
    ssd:string
    placa_de_video:string
    },
    quantidade:number,
    img:string
}

export interface MyStock{
    acessorios:Products[]
    Pc_Gamer:Products[]
    processador:Products[]
    cadeiras:Products[]
    mouse:Products[]
    fones:Products[]
}

export interface MethodSearch{
        marca:string[]
        processador:string[]
        placa_de_video:string[]
        memoria:string[]
        HD:string[]
        SSD:string[]
}