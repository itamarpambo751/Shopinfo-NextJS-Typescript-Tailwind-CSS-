import { Shopinfo } from "../components";
import { Banner, Categories, Header, InterTripleNavigation, PublicityCard, PublicityLabel, Section, Settings } from "../components/_ui";
import { ArrowRight } from "phosphor-react";
import { BsFire } from "react-icons/bs";
import { categories } from "./api/data"
import React, { useEffect,useState } from "react"
import { useProductsContext } from '@/context/ProdutsContext/ProductContext';
import { Products } from "@/Types/GloballTypes";
import { Card } from '@/cards';

export const metadata = {
  title: 'Shopinfo'
}

export default function Home(){

  const AllProducts =useProductsContext()
  const [products, setProducts] = useState<Products[]|undefined>(AllProducts?.products)

  return (
    <> 
    <Header />
    <div>

      <Banner.Image url="./assets/img/bcg5.jpg"/>
      <Banner.ImageSection url="./assets/img/underBanner.webp"/>

      <Shopinfo.FindYourPC />

      <Section.Root>
        <Section.Content>
          <Settings />
        </Section.Content>
      </Section.Root>

      <Section.Root>
        <div className="w-[90%] m-auto text-center max-md:w-full max-md:justify-center flex flex-col gap-7">
          <h1 className="text-[1.6rem] font-bold">Principais categorias</h1>
          <Categories categories={categories}/>
       </div>
      </Section.Root>

<div className='w-screen flex justify-center max-md:mt-[90px]'>
  <Shopinfo.Oferts />
</div>
      

      <Section.Root>
        <div className=" h-[700px] bg-[var(--shadow-color)] pt-12">
          <Section.Content>
            <h1 className="text-black text-4xl font-bold text-center uppercase ">Encontre o Pc Gamer Completo Para seus Jogos</h1>

            <InterTripleNavigation
              labels={['Selecione seus Jogos','Escolha o Preço','Selecione o Desempenho']}
            />

            <ul className="flex justify-between items-center gap-6 mt-28">
              <li className="h-[185px] w-[160px] efect-hover rounded-md overflow-hidden">
                <img src="./assets/img/game(1).jpg" className="w-[100%] h-[100%] object-cover"/>
              </li>
              <li className="h-[185px] w-[160px] efect-hover  rounded-md overflow-hidden">
                <img src="./assets/img/game(2).jpg" className="w-[100%] h-[100%] object-cover"/>
              </li>
              <li className="h-[185px] w-[160px] efect-hover  rounded-md overflow-hidden">
                <img src="./assets/img/game(4).png" className="w-[100%] h-[100%] object-cover"/>
              </li>
              <li className="h-[185px] w-[160px] efect-hover  rounded-md overflow-hidden">
                <img src="./assets/img/game(7).png" className="w-[100%] h-[100%] object-cover"/>
              </li>
              <li className="h-[185px] w-[160px] efect-hover  rounded-md overflow-hidden">
                <img src="./assets/img/game(8).png" className="w-[100%] h-[100%] object-cover"/>
              </li>
              <li className="h-[185px] w-[160px] efect-hover  rounded-md overflow-hidden">
                <img src="./assets/img/game(3).png" className="w-[100%] h-[100%] object-cover"/>
              </li>
              <li className="h-[185px] w-[160px] efect-hover  rounded-md overflow-hidden">
                <img src="./assets/img/game(6).png" className="w-[100%] h-[100%] object-cover"/>
              </li>
            </ul>
            <button className="flex font-semibold justify-center items-center text-[var(--background-color)] gap-8 bg-[var(--red-color)] m-auto mt-20 px-24 py-3 rounded-md">
              Próxima etapa
              <i>
                 <ArrowRight />
              </i>
            </button>
          </Section.Content>
        </div>
      </Section.Root>

      <Section.Root>
        <Section.Content>
          <h1 className="text-4xl font-bold flex justify-start items-center gap-6 mb-20 uppercase">
            <i className="text-[var(--red-text-color)]">
              <BsFire/>
            </i>
            Suba de Nivel no Multiverso Gamer da Shopinfo
          </h1>
        </Section.Content>
        <div className="flex gap-7 w-[90%] m-auto mt-10">


{
  products?.map((i,k)=>(
  k<=4?
  <Card.SpecialPromotioncard
    id={i.id.toString()}
    desconto={i.desconto}
    img={i.img}
    name={i.name}
    oldPrice={i.price}
    price={i.price}
    key={i.id}
    />:<></>
  ))
}
       
        </div>
      </Section.Root>


      <div className="mt-36">
        <Section.Root>
          <Section.Content>
            <div className="text-center text-[var(--background-color)]">
              <h1 className="uppercase text-4xl font-bold">ESCOLHA SEU PC GAMER</h1>
              <span className="text-xl">de acordo com seu nivel de jogo</span>
              <hr className="border-2 w-20 m-auto mt-3 rounded-xl border-[var(--red-color)]"/>
            </div>

            <ul className="flex justify-between text-[var(--background-color)] mt-10">
              <li className="rounded-md py-5 efect-hover flex flex-col items-center">
                <img src="./assets/img/choose2.png"/>
                <div className="text-center m-auto p-4 w-[90%] rounded-md">
                  <strong className="uppercase text-xl">Iniciante</strong>
                  <p className="text-[.79rem]">Este é o meu primeiro pc gamer, minha jornada começa agora!</p>
                  <span className="mt-6 text-[var(--red-text-color)] text-[.8rem]">
                    Ver Sugestões {'>'}
                  </span>
                </div>
              </li>
              <li className="rounded-md py-5 efect-hover flex flex-col items-center">
                <img src="./assets/img/choose3.png"/>
                <div className="text-center m-auto p-4 w-[90%] rounded-md">
                  <strong className="uppercase text-xl">Gamer</strong>
                  <p className="text-[.79rem]">Este é o meu primeiro pc gamer, minha jornada começa agora!</p>
                  <span className="mt-6 text-[var(--red-text-color)] text-[.8rem]">
                    Ver Sugestões {'>'}
                  </span>
                </div>
              </li>
              <li className="rounded-md py-5 efect-hover flex flex-col items-center">
                <img src="./assets/img/choose4.png"/>
                <div className="text-center m-auto p-4 w-[90%] rounded-md">
                  <strong className="uppercase text-xl">Pro player</strong>
                  <p className="text-[.79rem]">Este é o meu primeiro pc gamer, minha jornada começa agora!</p>
                  <span className="mt-6 text-[var(--red-text-color)] text-[.8rem]">
                    Ver Sugestões {'>'}
                  </span>
                </div>
              </li>
              <li className="rounded-md py-5 efect-hover flex flex-col items-center">
                <img src="./assets/img/choose1.png"/>
                <div className="text-center m-auto p-4 w-[90%] rounded-md">
                  <strong className="uppercase text-xl">Lendário</strong>
                  <p className="text-[.79rem]">Este é o meu primeiro pc gamer, minha jornada começa agora!</p>
                  <span className="mt-6 text-[var(--red-text-color)] text-[.8rem]">
                    Ver Sugestões {'>'}
                  </span>
                </div>
              </li>
            </ul>
          </Section.Content>
          <div className="absolute top-[-100px] left-0 bottom-0 right-0 w-full h-[110%] z-[-1] overflow-hidden">
            <img src="./assets/img/choose.webp" className="absolute top-10 left-0 bottom-0 right-0 w-full h-full object-cover"/>
          </div>
        </Section.Root>
        <div className="h-10 bg-black mt-[-50px]"/>
        <div className="bg-black mt-[-80px] pt-[150px] pb-28">
          <Section.Root>
            <Section.Content>
              <ul className="flex justify-between px-7">
                <li className="h-[461px] w-[336]">
                  <img src="./assets/img/nubank.webp" className="efect-hover object-cover w-full h-full"/>
                </li>
                <li className="h-[461px] w-[336]">
                  <img src="./assets/img/nubank.webp" className="efect-hover object-cover w-full h-full"/>
                </li>
                <li className="h-[461px] w-[336]">
                  <img src="./assets/img/nubank.webp" className="efect-hover object-cover w-full h-full"/>
                </li>
              </ul>
            </Section.Content>
          </Section.Root>
        </div>
      </div>
    </div>
    </> )
}