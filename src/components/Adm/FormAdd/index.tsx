import React from "react"
import axios from "axios"
const FormAdd:React.FC=()=>{

const Nome=React.useRef<HTMLInputElement | null >(null!)
const preco=React.useRef<HTMLInputElement | null >(null!)
const descricao=React.useRef<HTMLInputElement | null >(null!)
const entrega=React.useRef<HTMLInputElement | null >(null!)




    return(
    <main className="w-screen h-screen absolute flex items-center justify-center bg-[--background-color] z-[999]">
        <div className="w-[40%] p-2 shadow-lg bg-[--background-color] flex flex-col w-[60%] rounded  h-[60%]">
            <div className="p-2">
                <p>Adicionando produto</p>
            </div>
            <div className="flex flex-col">
        <p>Nome do produto:</p>
        <input className="h-[100px]" ref={Nome} placeholder="Nome do produto" />
<div className="flex justify-between w-[100%] mt-2">
  <div className="w-[50%]">
    <p>Preço do produto:</p>
        <input placeholder="Preco" ref={preco}/>
    <p>possivel desconto do produto:</p>
        <input placeholder="desconto" />
    <p>periodo de entrega:</p>
        <select placeholder="entrega" ref={entrega}>
            <option>Gratis</option>
            <option>Pago</option>
        </select>
    </div>

<div className="w-[50%] ">
<p>Imagem do produto</p>
<input type="file" className="w-[80%]"/>
<p>descricao do produto</p>
<textarea placeholder="descricao" className="h-[100px]" ref={descricao}/>
</div>

<div className="w-[50%] ">
<p>Codigo do produto</p>
<input placeholder="codigo"/>
<p>Defina o preco no PIX </p>
<input placeholder="valor no pix" />
<div className="mt-2 flex">
    <button className="w-[40%] h-[3rem] bg-red-500 rounded text-white">Canselar</button>
    <button 
    onClick={()=>{
        axios
  .post("http://127.0.0.1:5500/dd.json", {
    id:Math.floor(Math.random()*10),
    tipo:"pc-gamer",
    name: "uewo8ue9uwer",
    cod_post:"082731",
    referencia:"RX360A40",
    marca:0,
    price:"hisojdow",
    desconto:"80%",
    quantidade:12,
  })
  .then((resp) => {
    console.log(resp.data);
  })
  .catch((error) => {
    console.error("Erro na solicitação:", error);
  });
  
    }}
    className="w-[40%] h-[3rem] bg-green-500 ml-2 rounded text-white">Adicionar</button>
</div>
</div>

</div>
            </div>
        </div></main>
    )
}
export default FormAdd