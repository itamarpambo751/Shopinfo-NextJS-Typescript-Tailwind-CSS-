import React,{useState, useEffect} from 'react';
import { Banner, Categories,Footer,Header,Hr,InterTripleNavigation, PublicityCard, PublicityLabel, Section, Settings } from "../../components/_ui";
import { BsFire } from "react-icons/bs";
import { categories } from "../api/data"
import { Card } from '@/cards';
import { LateralMenuComplit } from '@/cards/LateralMenuComplit';
import { useProductsContext } from '@/context/ProdutsContext/ProductContext';
import { Products } from "@/Types/GloballTypes";

const Page: React.FC=() => {
  const valeuSearchFilter = (value: string) => {
    setFilterProduct(value)
  };
  const AllProducts =useProductsContext()
  const [products, setProducts] = useState<Products[]|undefined>(AllProducts?.products)
  const [filterProduct, setFilterProduct] = useState<string>('');
  const [Types, setTypes] = useState<Products[]>()
  
  useEffect(() => {
    if(filterProduct=="") setTypes(products?.filter((i)=>i.tipo==="mouse"))
    else setTypes(products?.filter((i)=>i.marca.toLowerCase().startsWith(filterProduct.toLocaleLowerCase())&& i.tipo=="mouse"))
  },[filterProduct]); 
  

  return (
    <> 
    <Header />
    <div className='w-[100%] flex flex-col justify-center items-center'>
     <div className='w-[100%] flex items-center justify-center'>
     <Banner.Gradient.Root>
				<Banner.Image url="./assets/img/bcg2.jpg"/>
				<div className='absolute top-0 left-0'>
					<Banner.Gradient.Container section='Home > Acessorios gamer'>
						<Banner.Gradient.Content
							title='Acessorios gamer'
							subtitle='A Nova era de PC Gamer chegou! Teste as suas Habilidades e jogue com um Neologic Gamer.'
							paraghraph='No mercado dos games há mais de 20 anos, a Shopinfo busca o melhor em termos de hardware e tecnologia para computadores. Com compromisso e'
							/>
					</Banner.Gradient.Container>
          <div className='flex flex-col mt-[15px] w-[100%] px-[70px]'>
            <p>A velocidade que roda e em fps sjeiweiwhiheuw juief uwiuef wuihef uwh</p>
            <div className='flex justify-end w-[100%]'>
              <p>ver mais</p>
            </div>
          </div>
				</div>
      </Banner.Gradient.Root>
     </div>

   <div className='w-[80%] mt-[60px] flex items-center justify-between'>
        <Section.Content>
          <Settings />
        </Section.Content>
  </div>  
  <div className='w-[80%] mt-[40px] flex flex-col items-center '>
    <div className='w-[100%] flex items-center justify-around'>
      <h1 className='text-[20px]'>Principais categorias</h1> <Hr className='w-[80%] bg-zinc-500' />
    </div>  

        <div className="w-[100%] mt-[10px] m-auto text-center flex flex-col gap-7">
          <Categories categories={categories}/>
       </div>

       <div className='flex items center  justify-between w-[100%]'>
  <div className='flex font-bold text-[13px] items-end'>
    <p>Filtro</p>
  </div>
   <div className='w-[100%] flex justify-end items-center mt-[60px]'>
           <div className='w-[250px] p-2 h-[80px] border-[1px] border-[white] flex flex-col justify-start items-center'>
             <p className='uppercase text-[14px] w-[100%]'>ordenar por:</p>
               <select className='w-[100%] border-none bg-transparent'>
                 <option>selecione</option>
               </select>
           </div>
      </div>
</div>
     
<main className='flex w-[100%] mt-[10px]'>

<div className='w-[20%]'>
    <LateralMenuComplit searchPC={false} onInputvalue={valeuSearchFilter} />
</div>


<div className='w-[80%] flex flex-col'>
<div className='w-[100%] p-2 grid grid-cols-4 gap-4'>
{
   Types?.map((i)=>
    (<Card.NormalCard key={i.id} imglLink={i.img} id={i.id.toString()} name={i.name} price={i.price} desconto={i.desconto}  />))
}
</div>
<div className='w-[100%] flex items-center justify-center mt-[20px] h-[300px]'>
       <PublicityLabel.Root expires={true}>
               <PublicityLabel.Icon icon={BsFire}/>
               <PublicityLabel.Content bigText="Carregar mais produtos" bold/>
      </PublicityLabel.Root>
</div>
</div>

</main>
  </div> 

    </div>
</>)
}
export default Page;